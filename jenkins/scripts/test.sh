#!/usr/bin/env sh

echo 'Running unit tests'
ng test

echo 'Karma v1.7.1 server started at http://159.89.92.227:9876/'

echo 'Running end-to-end tests'
ng e2e

echo 'Project is running at http://localhost:4200/'
