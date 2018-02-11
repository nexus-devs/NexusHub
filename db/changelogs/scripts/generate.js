const gitlog = require('gitlog')
const fs = require('fs')
const util = require('util')
const promisify = util.promisify
const exec = promisify(require('child_process').exec)
const _ = require('lodash')

class Logger {
  constructor() {
    this.logs = require('../data/logs.json')
  }

  async generate() {
    const commits = await this.getUnreleasedCommits()
    const unreleased = []

    commits.forEach(commit => {
      console.log(commit)
      commit.subject = commit.subject.split(' -')
      console.log(commit.subject)
      unreleased.push({
        commit: {
          title: commit.subject,
          description: '',
          url: '',
          date: ''
        },
        author: {
          name: '',
          url: ''
        }
      })
    })

    return this.save(unreleased)
  }

  /**
   * Get all commits since last git tag. Also assigns unreleased changes to
   * previously untracked commits.
   */
  async getUnreleasedCommits() {
    this.latest = {
      tag: {
        id: (await exec('git rev-list --tags --max-count=1')).stdout,
        name: (await exec(`git describe --tags ${lastTagID}`)).stdout.replace(/\n$/, '')
      }
    }
    this.latest.release = this.logs.find(e => e.release.name === this.latest.tag.name).release

    // Latest release not matched means there's a new tag, so we should assign
    // all previously 'unreleased' logs to that tag.
    if (!this.latest.release && this.logs[0]) {
      const unreleased = _.cloneDeep(this.logs[0])
      this.logs[0].release = {
        name: this.latest.tag.name,
        id: this.latest.tag.id,
        date: unreleased.release.date
      }
    }

    return await promisify(gitlog)({
      repo: `${__dirname}/../../../`,
      since: new Date(this.latest.release.date || 0),
      fields: ['subject', 'body']
    })
  }

  /**
   * Save formatted unreleased changes to this.logs and save to file
   */
  async save(logs) {
    if (this.logs[0] && this.logs[0].release === 'unreleased') {
      this.logs[0] = logs
    }
    // Either no logs present or new tag prepended
    else {
      this.logs.unshift(logs)
    }
    return promisify(fs.writeFile)('../data/logs.json', JSON.stringify(this.logs, null, 2))
  }
}


const logger = new Logger
logger.generate()