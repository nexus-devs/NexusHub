#!/bin/sh
# Stash builds from dev branch and go to staging
webpack="$(cat config/webpack/build.json | grep '\"enable\": true')"
git stash
git clean -f -d
git checkout staging

# If new builds were added - Remove all old ones and pop the stash. Otherwise,
# just pop the stash.
if [ webpack = true ]; then
  echo '* New webpack builds found - Remove old builds.'
  rm -rf assets/bundles/*
  git stash pop
else
  echo '* No new webpack builds - Just apply changes from dev branch.'
  git stash pop
fi

git add .
git commit -m "Auto-merge development with staging."
git push 'https://nexus-ci:'$NEXUS_CI_TOKEN'@github.com/nexus-devs/NexusHub' staging 2>/dev/null
# ^ suppress output to /dev/null to keep secrets hidden
