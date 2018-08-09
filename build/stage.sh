#!/bin/sh
# If new builds were added - Force merge with staging so we won't have duplicate
# builds. Otherwise, just do a normal merge.
if [ "$(cat config/webpack/build.json | grep \"enable\": true)" ]; then
  echo '* New webpack builds found - Override staging.'
  git push 'https://nexus-ci:'$NEXUS_CI_TOKEN'@github.com/nexus-devs/nexus-stats' --force development:staging 2>/dev/null
else
  echo '* No new webpack builds - Merge recursively.'
  git checkout development
  git checkout staging
  git merge -s recursive -X theirs development
  git push 'https://nexus-ci:'$NEXUS_CI_TOKEN'@github.com/nexus-devs/nexus-stats' staging 2>/dev/null
fi
# ^ suppress output to /dev/null to keep secrets hidden
