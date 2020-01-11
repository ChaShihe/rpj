'use strict'

const Controller = require('egg').Controller;

class MyController extends Controller {
    async index(){
        const {ctx} = this;
        ctx.body = 'my界面'
    }
}

module.exports = MyController;