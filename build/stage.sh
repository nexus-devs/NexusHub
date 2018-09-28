#!/bin/sh
# Commit builds from dev branch and go to staging
git add -A
git commit -m "Add staging builds"
git checkout staging

# If new builds were added - Remove all old ones and pop the stash. Otherwise,
# just pop the stash.
if cat config/webpack/build.json | grep -q '\"enable\": true'; then
  echo '* New webpack builds found - Override staging.'
  git reset --hard development
  git merge -m "Reset staging to development." -s ours origin/staging
else
  echo '* No new webpack builds - Just merge.'
  git merge -s recursive -X theirs development
fi

git push 'https://nexus-ci:'$NEXUS_CI_TOKEN'@github.com/nexus-devs/nexus-stats' staging 2>/dev/null
# ^ 2>/dev/null to suppress output which would contain the secret token
