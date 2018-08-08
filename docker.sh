#!/bin/bash
git submodule update --init --recursive

# Restart if already running
if [ "$(docker service ls | grep nexus_dev)" ]; then
  docker service scale nexus_dev=0 --detach=true
  docker service scale nexus_dev=1 --detach=true
  docker service logs nexus_dev -f --raw --tail 0
  exit
fi

# Bind current directory to docker container
devpath="$( cd "$(dirname "$0")" ; pwd -P )"'/'

# If directory starts with /mnt/, replace that with /, so the full path looks
# like /c/path/to/repo. Bind mounts won't work otherwise on bash on windows.
devpath="$(echo $devpath | sed -e 's/^\/mnt\//\//')"

# Deploy stack
bash -c "cd ./docker && exec bash deploy.sh --dev $devpath"
