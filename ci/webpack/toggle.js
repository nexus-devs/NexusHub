/**
 * Simple on/off switch for webpack build process during test units.
 * If any changes in the last commits affected the UI or UI-config file, then
 * rebuild. Otherwise don't. This will create a .webpack file in the config
 * directory which looks like { enable: Boolean, lastBuild: String }
 */
const gitlog = require('gitlog')
const util = require('util')
const fs = require('fs')
const config = require(`${process.cwd()}/config/webpack/build.json`)

async function toggle () {
  const commits = await util.promisify(gitlog)({
    repo: process.cwd(),
    number: 50
  })
  let changed = false

  for (const commit of commits) {
    if (commit.abbrevHash === config.lastBuild || changed) {
      break
    }

    for (const file of commit.files) {
      if (file.includes('ui/') || file.includes('package.json') || file.includes('ui.js') ||
          file.includes('build.js') || file.includes('toggle.js') || file.includes('webpack')) {
        changed = true
      }
    }
  }

  fs.writeFileSync(`${process.cwd()}/config/webpack/build.json`, JSON.stringify({
    enable: changed,
    lastBuild: commits[0].abbrevHash
  }, null, 2))
  console.log(changed ? '* Found relevant changes, webpack enabled.' : '* Nothing changed, don\'t rebuild webpack.')
}

toggle()
