import { NowRequest, NowResponse } from '@vercel/node'



export default (request: NowRequest, response: NowResponse) => {

    let data = request.body;
    console.log(data);
    

    if (data && data.account == 'admin' && data.password == '123456') {
        response.status(200).send({
            token: 'V-ADMIN-TOKN'
        });
    } else {
        response.status(200).send({
            err: "账号或密码错误!(use: admin, 123456)"
        });
    }
}