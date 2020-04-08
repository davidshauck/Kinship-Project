#!/bin/sh

if [ "$NODE_ENV" = production ]; then
    echo "Running production start"
    node server.js
else
    echo "Running $NODE_ENV start"
fi
