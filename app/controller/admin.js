'use strict'

const Controller = require('egg').Controller;

class AdminController extends Controller {
    async login(){
        const {ctx,service} = this;
        //接受客户端提交上来的数据
        let formData = ctx.request.body;
        let result = await service.admin.login(formData.username);
        let data = {code:1,Msg:'登录成功'};
        //账号不存在
        if(!result){
            data = {code:-1,Msg:'账号不存在'};
        }
        //密码错误
        if(result && result.passwd != formData.passwd){
            data = {code:-2,Msg:'密码错误'};
        }

        //更新登录次数和登录时间
        if (data.code == 1) {
            await service.admin.update(result.id);
           
        }
        ctx.body = data;
    }
}

module.exports = AdminController;