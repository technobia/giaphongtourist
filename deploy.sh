#!/usr/bin/env bash

# build
yarn build
cp CNAME docs/

# deploy
git add . &&
git commit -m 'deploy' &&
git push
