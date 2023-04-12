#!/usr/bin/env bash

set -eu

#cp .env.prod .env

docker run \
       --rm \
       --volume "$(pwd):/home/tcakvo/public_html/sahtoso-columbia" \
       --workdir "/home/tcakvo/public_html/sahtoso-columbia" \
       --entrypoint /bin/sh \
			 akvo/akvo-node-18-alpine:20220923.084347.0558ee6 \
			 -c 'yarn install && yarn build'
