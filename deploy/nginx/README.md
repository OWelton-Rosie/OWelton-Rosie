## Deploying to the Onion mirror

First, SSH to the VM (just doing it in the project dir is fine):
```bash 
gcloud compute ssh tor-vm
```

CD:
```bash
cd OWelton-Rosie
```

Execute:
```bash
./deploy.sh
```

To exit the SSH connection:
```bash
exit
```