# README
----
## Local mock data
local mock data, for Font-End egineer

## Use

```
	yarn install
	yarn run mock
```

and u can add api to `controllers`, `rest`, `static` folder

##	Structure

	/
		/controllers			 // rpc api
		/rest					 // restfull api
		/static					 // static files, such as .json
		app.json  				 // main entry
		controller.js 			 // handler route
		getIPAddress.js 		 // get server ip address, now not in use
		mock-server.js 			 // the koa server 
		package.json			 
		rest.js 				 // handle rest api, add middleware
		static-files.js. 		 // handle static files
		yarn.lock 				 // yran lock

## knowledge

    1. koa2
    2. koa2-cors
    3. koa-bodyparser
    4. koa-router
    5. faker.js

    6. http prePost check
    7. babel
    8. nodejs

----

by jack