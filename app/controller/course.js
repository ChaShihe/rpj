'use strict'

const Controller = require('egg').Controller;

class CourseController extends Controller {
    async add(){
        const {ctx,service} = this;
        const formData = ctx.request.body;
        const result = await service.course.add(formData);
        let data = {code:1,Msg:'操作成功'};
        if(!result.insertId){
            data = {code:-1,Msg:'操作失败'};
        }
        ctx.body = data
    }

    async index(){
        const {ctx,service} = this;
        const result = await service.course.index();
        const nums = await service.course.count();
        let data = {"code":0,"msg":"","count":nums,"data":result};
        ctx.response.body = data;
    }


    async del(){
        const {ctx,service} = this;
        const cid = ctx.query.cid;
        const result = await service.course.del(cid);
        let data = {code:1,Msg:'删除成功'};
        ctx.response.body = data;
    }
    async get(){
        const {ctx,service} = this;
        const cid = ctx.query.cid;
        // console.log(cid);
        const result = await service.course.getCourseByCid(cid);
        let data = {
            code:1,
            course:result
        };
        ctx.response.body = data;
    }

    async edit(){
        const {ctx,service} = this;
        const formData = ctx.request.body;
        // console.log(cid);
        const result = await service.course.edit(formData);
        let data = {
            code:1,
            Msg:'操作成功'
        };
        ctx.response.body = data;
    }
}

module.exports = CourseController;