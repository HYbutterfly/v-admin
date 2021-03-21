var Mock = require('mockjs')


export default function mock() {
    Mock.mock('api/login',{
        token: 'V-ADMIN-TOKN',
        me: {
            id: "123456",
            nick: "JulyWind",
            role: "admin"
        }
    })
}