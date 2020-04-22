#!/bin/sh

echo "Creating Container"
heroku container:push web
echo "Pushing deploying container"
heroku container:release web
