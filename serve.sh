#!/usr/bin/bash

docker build --no-cache -t emretepedev . && docker run -p 3000:3000 emretepedev
