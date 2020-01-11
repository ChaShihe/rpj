'use strict'

const Controller = require('egg').Controller;

class KeyController extends Controller{
    async hq(){
        const {ctx,service} = this;
        //接受get过来的信息
        let page = ctx.query.page;
        let limit = 10;
        const results  = await service.key.hq(limit,limit*(page-1));
        ctx.body = results;
    }
}

module.exports = KeyController;