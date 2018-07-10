const program = require('commander')
program.version('1.0.1')
  .option('-p, --port [port]', 'set local server port, default port is 3000', 3000)
  .parse(process.argv)

const colors = require('colors')  

const path = require('path')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const controller = require('./controller') // register routers to koa-router
const rest = require('./rest')
const ips = require('./getIPAddress')
const app = new Koa()

let cors = require('koa2-cors')

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

app.listen(program.port)
console.log(colors.yellow.bold('Server Running At:'))
for (let ip of ips) {
  console.log(colors.green.underline(`http://${ip}:${program.port}`))
}
