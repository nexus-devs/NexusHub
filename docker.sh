#!/bin/bash
# Bind current directory to docker container
devpath="$( cd "$(dirname "$0")" ; pwd -P )"'/'

# If directory starts with /mnt/, replace that with /, so the full path looks
# like /c/path/to/repo. Bind mounts won't work otherwise on bash on windows.
devpath="$(echo $devpath | sed -e 's/^\/mnt\//\//')"

# Get docker repo and deploy
if [ ! -d "./docker" ]; then
  git clone https://github.com/nexus-devs/docker
fi
bash -c "cd ./docker && exec bash deploy.sh --dev $devpath"
