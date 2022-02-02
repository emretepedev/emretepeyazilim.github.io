#!/usr/bin/bash

docker build --no-cache -t frontend . && docker run -p 3000:3000 frontend