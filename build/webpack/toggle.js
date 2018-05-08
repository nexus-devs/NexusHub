/**
 * Simple on/off switch for webpack build process during test units.
 * If any changes in the last commit affected the UI or UI-config file, then
 * rebuild. Otherwise don't. This will create a .webpack file in the root
 * directory which looks like { enable: Boolean }
 *
 * Note that the CI process only runs on the *last* commit, meaning that your
 * UI changes should either be the last commit you're pushing or you shouldn't
 * push multiple commits at the same time in general.
 */
const gitlog = require('gitlog')
const util = require('util')
const fs = require('fs')

async function toggle () {
  const changes = await util.promisify(gitlog)({
    repo: process.cwd(),
    number: 1
  })
  let changed = false
  changes[0].files.forEach(file => {
    if (file.includes('ui/') || file.includes('package.json') || file.includes('ui.js')) {
      changed = true
    }
  })
  fs.writeFileSync(`${process.cwd()}/.webpack.json`, JSON.stringify({
    enable: changed
  }))
  console.log(changed ? '* Found relevant changes, webpack enabled.' : '* Nothing changed, don\'t rebuild webpack.')
}

toggle()
