#!/bin/sh

# Create token.env file if GITCODE_ACCESS_TOKEN is provided
if [ -n "$NEXT_PUBLIC_GITCODE_ACCESS_TOKEN" ]; then
  echo "Creating token.env from environment variable..."
  echo "$NEXT_PUBLIC_GITCODE_ACCESS_TOKEN" > /app/backend/token.env
fi

# Start backend
echo "Starting backend on port 8080..."
cd /app/backend
# Backend listens on PORT env var or 8080 default
PORT=8080 node dist/backend/main.js &
BACKEND_PID=$!

# Start frontend
echo "Starting frontend on port 3000..."
cd /app/frontend
# Frontend listens on PORT env var or 8080 default (in server.js)
# We set it to 3000 to avoid conflict
PORT=3000 NODE_ENV=production node server.js &
FRONTEND_PID=$!

# Wait for any process to exit
wait $BACKEND_PID $FRONTEND_PID
exit $?
