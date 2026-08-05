#!/bin/bash
set -e

git pull

if ! npm install; then
    echo "npm install failed"
    exit 1
fi

SELF_HOST=1 npm run build

sudo rsync -a --delete build/ /var/www/oweltonrosie/

echo "Deployment complete."