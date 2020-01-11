'use strict'

const Service = require('egg').Service;

class CourseService extends Service{
    async add(formData){
        const {app} = this;
        let result = await app.mysql.insert('course',formData);
        return result;

    }
    async index(){
        const {app} = this;
        let result = await app.mysql.select('course');
        return result;

    }
    async count(){
        const {app} = this;
        let result = await app.mysql.query('select COUNT(cid) nums FROM course');
        return result[0].nums;

    }

    async del(cid){
        const {app} = this;
        let result = await app.mysql.delete('course',{cid});
        return result;

    }
    
    async getCourseByCid(cid){
        const {app} = this;
        let result = await app.mysql.get('course',{cid});
        // console.log(result);
        return result;

    }
    async edit(formData){
        const {app} = this;
        let result = await app.mysql.update('course',formData,{
            where:{
                cid:formData.cid
            }
        });
        return result;

    }
    
    
    
}

module.exports = CourseService;