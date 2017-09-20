const APIError = require('../rest').APIError // eslint-disable-line
let faker = require('faker')
faker.locale = 'zh_CN'
/* eslint-disable */
const GLOBALlDATA = {
    bus: {'profession':[{'id':1,'name':'农、林、牧、渔业','code':'A1001'},{'id':2,'name':'采矿业','code':'B1001'},{'id':3,'name':'制造业','code':'C1001'},{'id':5,'name':'建筑业','code':'E1001'},{'id':4,'name':'电气、热力、燃气及水生产和供应业','code':'D1001'},{'id':6,'name':' 批发和零售业','code':'F1001'},{'id':7,'name':'交通运输、仓储和邮政业','code':'G1001'},{'id':8,'name':'住宿和餐饮业','code':'H1001'},{'id':9,'name':'信息传输、软件和信息技术服务业','code':'I1001'},{'id':10,'name':'金融业','code':'J1001'},{'id':11,'name':'房地产业','code':'K1001'},{'id':12,'name':'租赁和商务服务业','code':'L1001'},{'id':13,'name':'科学研究和技术服务业','code':'M1001'},{'id':14,'name':'水利、环境和公共设施管理业','code':'N1001'},{'id':15,'name':'居民服务、修理和其他服务业','code':'O1001'},{'id':16,'name':'教育','code':'P1001'},{'id':17,'name':'卫生和社会工作','code':'Q1001'},{'id':18,'name':'文化、体育和娱乐业','code':'R1001'},{'id':19,'name':'公共管理、社会保障和社会组织','code':'S1001'},{'id':20,'name':'国际组织','code':'T1001'}]},
    pay: {'profession':[{'id':21,'name':'月付','code':'20','desc':'元/月'},{'id':22,'name':'季付','code':'30','desc':'元/季'},{'id':23,'name':'半年付','code':'40','desc':'元/半年'},{'id':24,'name':'年付','code':'50','desc':'元/年'},{'id':25,'name':'一次性付','code':'60','desc':'元'}]},
    jbd: {'profession':[{'id':26,'name':'5号','code':'5','desc':'5号','oppsiteCode':'20'},{'id':27,'name':'10号','code':'10','desc':'10号','oppsiteCode':'25'},{'id':28,'name':'20号','code':'20','desc':'20号','oppsiteCode':'5'},{'id':29,'name':'25号','code':'25','desc':'25号','oppsiteCode':'10'}]},
    bank: {'profession':[{'name':'国家开发银行','code':'201'},{'name':'中国进出口银行','code':'202'},{'name':'中国农业发展银行','code':'203'},{'name':'交通银行','code':'301'},{'name':'中信实业银行','code':'302'},{'name':'中国光大银行','code':'303'},{'name':'华夏银行','code':'304'},{'name':'中国民生银行','code':'305'},{'name':'广东发展银行','code':'306'},{'name':'深圳发展银行','code':'307'},{'name':'招商银行','code':'308'},{'name':'兴业银行','code':'309'},{'name':'上海浦东发展银行','code':'310'},{'name':'城市商业银行','code':'313'},{'name':'农村商业银行','code':'314'},{'name':'城市信用社','code':'401'},{'name':'农村信用社','code':'402'},{'name':'中国邮政储蓄银行','code':'403'},{'name':'中国工商银行','code':'102'},{'name':'中国农业银行','code':'103'},{'name':'中国银行','code':'104'},{'name':'中国建设银行','code':'105'}]}
}
/* eslint-enable */
module.exports = {
    'GET /api/enterprise/profession/:type': async (ctx, next) => {
        try {
            let data = {}
            if (ctx.params.type === 'bus') {
                data = GLOBALlDATA.bus
            }
            if (ctx.params.type === 'pay') {
                data = GLOBALlDATA.pay
            }
            if (ctx.params.type === 'jbd') {
                data = GLOBALlDATA.jbd
            }
            if (ctx.params.type === 'bank') {
                data = GLOBALlDATA.bank
            }
            ctx.rest(data)
        } catch (e) {
            throw new APIError('BaseData:not_found', 'get date base data error.')
        }
    }
}

