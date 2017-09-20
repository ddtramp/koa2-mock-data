// add url-route:
let fnIndex = async (ctx, next) => {
    ctx.response.body = '<h1>Mock Server Running at Port 3000</h1>'
}

let fnSignin = async (ctx, next) => {
    let name = ctx.params.name
    ctx.response.body = `<h1>Hello, ${name}!</h1>`
}

module.exports = {
    'GET /': fnIndex,
    'POST /:test': fnSignin
}
