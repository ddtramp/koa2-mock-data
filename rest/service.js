const APIError = require('../rest').APIError
let faker = require('faker')
faker.locale = 'zh_CN'

module.exports = {
    'GET /api/customer/project': async (ctx, next) => {
        // console.log(ctx.params.project)
        if (ctx.request.query.id) {
            let data = []
            for (let i = 0; i < 8; i++) {
                data.push({
                    'id': faker.random.number(),
                    'cusId': faker.random.number(),
                    'serviceName': faker.commerce.productName() + i.toString(),
                    'serviceStartDate': '2017-01-11',
                    'serviceEndDate': '2017-11-30',
                    'payCycle': 30,
                    'price': 12,
                    'payType': 1,
                    'discountStrategy': 1,
                    'serviceDesc': '12',
                    'del': false,
                    'createTime': '2017-09-20 16:19:05'
                })
            }
            ctx.rest(data)
        } else {
            throw new APIError('product:not_found', 'product not found by id.')
        }
    },
    'POST /api/customer/project': async (ctx, next) => {
        let id = null
        if ('id' in ctx.request.body) {
            id = ctx.request.body.id
        }
        let data = {
            cusId: ctx.request.body.cusId,
            serviceName: ctx.request.body.serviceName,
            serviceStartDate: ctx.request.body.serviceStartDate,
            serviceEndDate: ctx.request.body.serviceEndDate,
            payCycle: ctx.request.body.payCycle,
            price: ctx.request.body.price,
            payType: ctx.request.body.payType,
            discountStrategy: ctx.request.body.discountStrategy,
            number: ctx.request.body.number,
            serviceDesc: ctx.request.body.serviceDesc,
            del: false,
            createTime: faker.date.future()
        }
        if (id) {
            data.id = id
        } else {
            data.id = faker.random.number()
        }
        ctx.rest(data)
    },
    'DELETE /api/customer/project': async (ctx, next) => {
        if (ctx.request.query.projectId) {
            ctx.rest('删除客户成功' + ctx.request.query.projectId)
        } else {
            throw new APIError('product:not_found', 'product not found by id.')
        }
    }
}
