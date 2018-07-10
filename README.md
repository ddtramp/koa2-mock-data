# README
----
## Local mock data

local mock data, for Font-End egineer

## Use

```bash
yarn install
yarn run mock
```

and u can add api to `controllers`, `rest`, `static` folder

## Structure

``` bash
/
  /controllers // rpc api
  /rest // restfull api
  /static // static files, such as .json
  app.json // main entry
  controller.js // handler route
  getIPAddress.js // get server ip address, now not in use
  mock-server.js // the koa server
  package.json
  rest.js // handle rest api, add middleware
  static-files.js // handle static files
  yarn.lock   // yran lock
```

## knowledge

* koa2
* koa2-cors
* koa-bodyparser
* koa-router
* [faker.js](https://github.com/marak/faker.js/)

* [http CORS prePost check](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS#Preflighted_requests)
* babel
* nodejs
* programer
* colors
* ips (internal module)

----

by jack