#!/bin/bash
set -e

cd ~/OWelton-Rosie

git pull
npm install
SELF_HOST=1 npm run build
sudo rsync -a --delete build/ /var/www/oweltonrosie/