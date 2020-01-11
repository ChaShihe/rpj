'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller{
    async info(){
        const {ctx} = this;
        ctx.body = '个人信息';

    }
    async reg(){
        const {ctx, service} = this;

        //接受用户提交的数据 post
        let formdata = ctx.request.body;
        // 需要把数据保存的数据库中
        let data = {};
        //验证账号是否存在
        const userexist = await service.user.getUserDataUsername(formdata.username);
        if(userexist){
            ctx.response.body  = {
                code:-1,
                Msg:'账号已存在'
            };
            return ;

        }
        const result = await service.user.reg(formdata);
        if(result.insertId){
            data.code = 1;
            data.Msg = '注册成功';
            data.insertId = result.insertId;
        }
        ctx.response.body = data;
    }
}

module.exports = UserController;