#!/bin/sh
# Commit builds from dev branch and go to staging
webpack="$(cat config/webpack/build.json | grep '\"enable\": true')"
git add -A
git commit -m "Add staging builds"

# If new builds were added - Remove all old ones and pop the stash. Otherwise,
# just pop the stash.
if [ -z webpack ]; then
  echo '* New webpack builds found - Override staging.'
  git push 'https://nexus-ci:'$NEXUS_CI_TOKEN'@github.com/nexus-devs/nexus-stats' --force development:staging 2>/dev/null
else
  git checkout development
  git checkout staging
  git merge -s recursive -X theirs development
  git push 'https://nexus-ci:'$NEXUS_CI_TOKEN'@github.com/nexus-devs/nexus-stats' staging 2>/dev/null
fi
