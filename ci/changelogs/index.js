const gitlog = require('gitlog')
const fs = require('fs')
const util = require('util')
const promisify = util.promisify
const exec = promisify(require('child_process').exec)
const _ = require('lodash')

class Logger {
  constructor () {
    this.logs = require('./data/logs.json')
    this.types = ['feat', 'fix', 'perf']
  }

  async generate () {
    const commits = await this.getUnreleasedCommits()
    const changes = {}

    commits.forEach(commit => {
      const message = commit.body.split('\n\n')
      const scopere = commit.subject.match(/\(([^)]+)\)/)
      commit.body = message[0]
      commit.footer = message[1]
      commit.scope = scopere ? scopere[1] : null
      commit.type = commit.subject.split(': ')[0].replace(`(${commit.scope})`, '')
      commit.subject = commit.subject.split(': ')[1]

      if (this.types.includes(commit.type)) {
        const issues = this.getIssues(commit.footer)
        const change = this.getChange(commit, issues)

        // Ensure we have an object for commit type
        const type = commit.type
        changes[type] = changes[type] || {}

        // Ensure scope exists within type
        const scope = [commit.scope || 'general']
        changes[type][scope] = changes[type][scope] || []

        // Add change to target scope within target type
        changes[type][scope].push(change)
      }
    })
    return this.save(changes)
  }

  /**
   * Get proper change format from a specified commit
   */
  getChange (commit, issues) {
    return {
      commit: {
        subject: commit.subject,
        description: commit.body,
        url: `https://github.com/nexus-devs/nexus-stats/commit/${commit.hash}`
      },
      issues,
      author: {
        name: commit.authorName,
        url: `https://github.com/${commit.authorName}`
      }
    }
  }

  /**
   * Find related issues in commit footer
   */
  getIssues (footer) {
    const issues = []

    if (footer) {
      footer.match(/[0-9]*/g).forEach(num => {
        if (num) {
          issues.push({
            id: `#${num}`,
            url: `https://github.com/nexus-devs/nexus-stats/issues/${num}`
          })
        }
      })
    }
    return issues
  }

  /**
   * Get all commits since last git tag. Also assigns unreleased changes to
   * previously untracked commits.
   */
  async getUnreleasedCommits () {
    this.latest = {
      tag: {},
      release: {}
    }
    this.latest.tag.id = (await exec('git rev-list --tags --max-count=1')).stdout.replace(/\n$/, '')
    this.latest.tag.name = (await exec(`git describe --tags ${this.latest.tag.id}`)).stdout.replace(/\n$/, '')
    this.latest.release = this.logs.find(e => e.release.name === this.latest.tag.name)
    this.latest.release = this.latest.release ? this.latest.release.release : null

    // Latest release not matched means there's a new tag, so we should assign
    // all previously 'unreleased' logs to that tag.
    if (!this.latest.release && this.logs[0]) {
      const unreleased = _.cloneDeep(this.logs[0])
      this.logs[0].release = this.latest.release = {
        name: this.latest.tag.name,
        id: this.latest.tag.id,
        date: unreleased.release.date
      }
    }

    return promisify(gitlog)({
      repo: `${__dirname}/../../../`,
      since: new Date(this.latest.release.date),
      fields: ['hash', 'subject', 'body', 'authorName', 'authorDate']
    })
  }

  /**
   * Save formatted unreleased changes to this.logs and save to file
   */
  async save (changes) {
    const unreleased = {
      release: {
        name: 'unreleased',
        id: null,
        date: new Date().getTime()
      },
      changes
    }
    if (this.logs[0] && this.logs[0].release.name === 'unreleased') {
      this.logs[0] = unreleased
    }
    // Either no logs present or new tag prepended
    else {
      this.logs.unshift(unreleased)
    }
    return promisify(fs.writeFile)(`${__dirname}/../data/logs.json`, JSON.stringify(this.logs, null, 2))
  }
}

const logger = new Logger()
logger.generate()
