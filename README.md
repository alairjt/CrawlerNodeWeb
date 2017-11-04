
## Build APP to production
  * `docker build -t crawler-node-web . --build-arg app_env=production`

## Run production build
  * `docker run -i -t -p 3000:3000 [image id]`
