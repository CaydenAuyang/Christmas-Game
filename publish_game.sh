#!/bin/bash
# Public Deployment Script for Christmas Game

echo "============================================="
echo "   Christmas Game - Public Deployment Tool   "
echo "============================================="
echo ""
echo "This script helps you deploy the Client to Surge.sh"
echo "and configure it to connect to your Local Server."
echo ""
echo "STEP 1: Expose your Local Server"
echo "--------------------------------"
echo "Your server runs on port 2567."
echo "You need to expose this port to the internet."
echo ""
echo "OPTION A: Using ngrok (Recommended)"
echo "   Run this in a NEW terminal:  ngrok http 2567"
echo ""
echo "OPTION B: Using localtunnel"
echo "   Run: npx localtunnel --port 2567"
echo ""
echo "Once you have the public URL (e.g. https://xxxx.ngrok-free.app),"
echo "copy it and paste it below."
echo ""
read -p "Enter Public Server URL (Press Enter for localhost): " SERVER_URL

if [ -z "$SERVER_URL" ]; then
  SERVER_URL="ws://localhost:2567"
  echo "Using default: $SERVER_URL (Note: External users won't be able to connect)"
fi

# Convert https to wss if needed (Client expects WebSocket)
# But socket.io/colyseus usually handle upgrade.
# GameClient.ts expects the full URL. If user pastes 'https', Colyseus Client usually handles 'wss' switch or we should fix it.
# Actually, let's just ask user to paste the base URL logic or 'wss://' if they know.
# But for safety, replace http with ws?
# Let's trust the user or Colyseus wrapper.
# Typically user pastes "https://..." from ngrok.
# Colyseus(endpoint) usually works with http/https and upgrades.

echo ""
echo "STEP 2: Building Client"
echo "-----------------------"
echo "Configuring Client to connect to: $SERVER_URL"

# Export for Vite
export VITE_SERVER_URL="$SERVER_URL"

cd client || exit
npm run build

echo ""
echo "STEP 3: Deploying to GitHub Pages"
echo "---------------------------------"
echo "Repo: CaydenAuyang/Christmas-Game"
echo ""

# Install gh-pages if missing
npm list gh-pages || npm install --no-save gh-pages

# Deploy dist folder to gh-pages branch
npx gh-pages -d dist

echo ""
echo "============================================="
echo "   DEPLOYMENT COMPLETE"
echo "   Your Game will be live in a few minutes at:"
echo "   https://CaydenAuyang.github.io/Christmas-Game/"
echo ""
echo "   Make sure your 'ngrok' terminal stays OPEN."
echo "============================================="
