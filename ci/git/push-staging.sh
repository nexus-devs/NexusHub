#!/bin/sh
# Commit builds from dev branch and go to staging
git add -A
git commit -m "ci: Add staging builds"
git checkout staging
git checkout development -- config/webpack/build.json

# If new builds were added - Remove all old ones and pop the stash. Otherwise,
# just pop the stash.
if cat config/webpack/build.json | grep -q '\"enable\": true'; then
  echo '* New webpack builds found - Override staging.'
  git reset --hard development
  git merge -m "ci: Merge development with staging." -s ours origin/staging
else
  echo '* No new webpack builds - Just merge.'
  git reset --hard HEAD # Reset webpack build.json
  git merge -s recursive -X theirs development
fi

git remote set-url origin 'https://nexus-ci:'$NEXUS_CI_TOKEN'@github.com/nexus-devs/NexusHub.git'
git push origin staging
