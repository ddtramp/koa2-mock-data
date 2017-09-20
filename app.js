require('babel-register')
require('./mock-server')
require('babel-core').transform('code', {
    plugins: ['transform-runtime']
})
