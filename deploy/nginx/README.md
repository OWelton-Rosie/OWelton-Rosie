cd ~/OWelton-Rosie

git pull

npm install          # only needed if package.json changed

SELF_HOST=1 npm run build

sudo rsync -a --delete build/ /var/www/oweltonrosie/