const path = require('path')
const mime = require('mime')
const fs = require('mz/fs')

function staticFiles (url, dir) {
    return async (ctx, next) => {
        let rpath = ctx.request.path
        if (rpath.startsWith(url)) {
            let fp = path.join(__dirname, dir, rpath.substring(url.length))
            console.log(rpath)
            if (await fs.exists(fp)) {
                ctx.response.type = mime.getType(rpath)
                ctx.response.body = await fs.readFile(fp)
            } else {
                ctx.response.status = 404
            }
        } else {
            await next()
        }
    }
}


module.exports = staticFiles
