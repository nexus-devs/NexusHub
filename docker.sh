#!/bin/sh
devpath="$( cd "$(dirname "$0")" ; pwd -P )"
if [ ! -d "./docker" ]; then
  git clone https://github.com/nexus-devs/docker
fi

bash docker/init-swarm.sh $@ $devpath