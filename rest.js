/* eslint-disable */
module.exports = {
    APIError: function (code, message) {
        this.code = code || 'internal:unknown_error';
        this.message = message || '';
    },
    restify: (pathPrefix) => {
        pathPrefix = pathPrefix || '/api/';
        return async (ctx, next) => {
            if (ctx.request.path.startsWith(pathPrefix)) {
                console.log(`Process API ${ctx.request.method} ${ctx.request.url}...`);
                ctx.rest = (data) => {
                    ctx.response.type = 'application/json';
                    let d = {
                        status: 1200,
                        data,
                        timestamp: new Date().toUTCString()
                    }
                    ctx.response.body = d;
                }
                try {
                    await next();
                } catch (e) {
                    console.log('Process API error...');
                    ctx.response.status = 1500;
                    ctx.response.type = 'application/json';
                    ctx.response.body = {
                        code: e.code || 'internal:unknown_error',
                        message: e.message || ''
                    };
                }
            } else {
                await next();
            }
        };
    }
};

/* eslint-enable */
