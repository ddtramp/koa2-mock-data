const APIError = require('../rest').APIError
let faker = require('faker')
faker.locale = 'zh_CN'

module.exports = {
    'GET /api/customer/custom': async (ctx, next) => {
        let data = {}
        let arr = ['A', 'B', 'C', 'D', 'K', 'L', 'W', 'Y', 'X']
        let num = [2, 3, 4, 5, 6, 7, 5, 1, 2]
        for (let [index, item] of arr.entries()) {
            data[item] = []
            for (let i = 0; i < num[index]; i++) {
                data[item].push({
                    id: faker.random.number(),
                    companyName: faker.company.companyName(),
                    letter: item
                })
            }
        }
        ctx.rest(data)
    },
    'GET /api/customer/custom/getCustomById': async (ctx, next) => {
        if (ctx.request.query.id) {
            ctx.rest({
                'id': ctx.request.query.id,
                'code': '01BTA5ZX8J0A7D0PDJJ6TZ1JEM',
                'industyId': 8,
                'companyName': 'faker data',
                'contactPerson': '123',
                'contactPhone': '17612129009',
                'emailAddress': 'wangxichao001@gmail.com',
                'billDate': 5,
                'repaymentDate': 20,
                'letter': 'A',
                'projectCount': 12
            })
        } else {
            throw new APIError('product:not_found', 'product not found by id.')
        }
    },
    'POST /api/customer/custom': async (ctx, next) => {
        let id = null
        if ('id' in ctx.request.body) {
            id = ctx.request.body.id
        }
        let data = {
            'code': faker.random.uuid(),
            'companyName': ctx.request.body.companyName,
            'industyId': ctx.request.body.industyId,
            'contactPerson': ctx.request.body.contactPerson,
            'contactPhone': ctx.request.body.contactPerson,
            'emailAddress': ctx.request.body.emailAddress,
            'billDate': ctx.request.body.billDate,
            'entId': 3,
            'letter': 'S',
            'del': false,
            'createTime': new Date().toUTCString()
        }
        if (id) {
            data.id = id
        } else {
            data.id = faker.random.number()
        }
        ctx.rest(data)
    },
    'DELETE /api/customer/custom': async (ctx, next) => {
        if (ctx.request.query.id) {
            ctx.rest('删除客户成功')
        } else {
            throw new APIError('product:not_found', 'product not found by id.')
        }
    }
}
