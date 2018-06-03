#!/bin/bash

# Restart if already running
if [ "$(docker service ls | grep nexus_dev)" ]; then
  docker service scale nexus_dev=0
  docker service scale nexus_dev=1
  docker service logs nexus_dev -f --raw
  echo 'restart'
  exit
fi

# Bind current directory to docker container
devpath="$( cd "$(dirname "$0")" ; pwd -P )"'/'

# If directory starts with /mnt/, replace that with /, so the full path looks
# like /c/path/to/repo. Bind mounts won't work otherwise on bash on windows.
devpath="$(echo $devpath | sed -e 's/^\/mnt\//\//')"

# Get docker repo and deploy
if [ ! -d "./docker" ]; then
  git clone https://github.com/nexus-devs/docker
else
  cd docker
  git pull
  cd ../
fi
bash -c "cd ./docker && exec bash deploy.sh --dev $devpath"
