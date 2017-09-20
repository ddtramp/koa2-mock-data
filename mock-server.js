const path = require('path')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
var cors = require('koa2-cors')

const controller = require('./controller') // register routers to koa-router
const rest = require('./rest')

const app = new Koa()

app.use(cors({
    origin: function (ctx) {
        return '*'
        // if (ctx.url === '/test') {
        //     return '*' // 允许来自所有域名请求
        // }
        // return 'http://localhost:8080' // 这样就能只允许 http://localhost:8080 这个域名的请求了
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'PUT', 'POST', 'DELETE', 'HEAD', 'OPTIONS', 'PATCH'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}))

app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`)
    await next()
})

let staticFiles = require('./static-files')
app.use(staticFiles('/static/', path.resolve('./', '/static')))

app.use(bodyParser())

app.use(rest.restify())

app.use(controller())

app.listen(3000)
console.log('Mock server started at port 3000...')
