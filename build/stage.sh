#!/bin/sh
# Commit builds from dev branch and go to staging
git add -A
git commit -m "Add staging builds"
git checkout development
git checkout staging

# If new builds were added - Remove all old ones and pop the stash. Otherwise,
# just pop the stash.
if cat config/webpack/build.json | grep -q '\"enable\": true'; then
  echo '* New webpack builds found - Override staging.'
  git checkout development
  git push 'https://nexus-ci:'$NEXUS_CI_TOKEN'@github.com/nexus-devs/nexus-stats' --force development:staging 2>/dev/null
else
  echo '* No new webpack builds - Just merge.'
  git merge -s recursive -X theirs development
  git push 'https://nexus-ci:'$NEXUS_CI_TOKEN'@github.com/nexus-devs/nexus-stats' staging 2>/dev/null
fi
