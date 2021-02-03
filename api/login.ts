import { NowRequest, NowResponse } from '@vercel/node'


export default (request: NowRequest, response: NowResponse) => {

    let data = request.body;
    
    if (data && data.account == 'admin' && data.password == '123456') {
        response.status(200).send({
            token: 'V-ADMIN-TOKN',
            me: {
                id: "123456",
                nick: "JulyWind",
                role: "admin"
            }
        });
    } else {
        response.status(200).send({
            err: "账号或密码错误!(use: admin, 123456)"
        });
    }
}