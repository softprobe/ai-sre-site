#!/bin/bash
set -e

echo "Starting deployment setup for softprobe.ai and subdomains..."

# Make sure we're in the right directory
cd "$(dirname "$0")"

# Clone Context Repo
if [ ! -d "deploy/context-site" ]; then
  echo "Cloning context.softprobe.ai repository..."
  git clone https://github.com/softprobe/website.git deploy/context-site
else
  echo "Updating context.softprobe.ai repository..."
  cd deploy/context-site
  git fetch --all
  git reset --hard origin/main
  cd ../..
fi

# Clone SRE Repo
if [ ! -d "deploy/sre-site" ]; then
  echo "Cloning sre.softprobe.ai repository..."
  git clone -b refactor/remove-release-gating-canary https://github.com/softprobe/ai-sre-site.git deploy/sre-site
else
  echo "Updating sre.softprobe.ai repository..."
  cd deploy/sre-site
  git fetch --all
  git reset --hard origin/refactor/remove-release-gating-canary
  cd ../..
fi

echo "Building and starting Docker container..."
docker-compose up --build -d

echo "Deployment successful! Sites are being served on port 80."
echo "If you have mapped the domains to this machine, Nginx will dynamically route them."
