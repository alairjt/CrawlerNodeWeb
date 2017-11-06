# CrawlerNodeWeb
Client of CrawlerNodeAPI

[![Build Status](https://travis-ci.org/alairjt/CrawlerNodeWeb.svg?branch=master)](https://travis-ci.org/alairjt/CrawlerNodeWeb)
[![codecov.io](https://codecov.io/gh/alairjt/CrawlerNodeWeb/coverage.svg?branch=master)](https://codecov.io/gh/alairjt/CrawlerNodeWeb?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/alairjt/CrawlerNodeWeb/badge.svg?branch=master)](https://coveralls.io/github/alairjt/CrawlerNodeWeb?branch=master)

## How to run the sample?

#### Run from source using the following commands:
- `npm install`
- `npm start`

#### Run tests
- `npm test`

#### Generate doc
- `gulp doc`


## Build APP to production
- `docker build -t crawler-node-web . --build-arg app_env=production`

## Run production build
- `docker run -i -t -p 3000:3000 [image id]`

## Run tests e2e
- `npm run test-e2e`