'use strict'

const Service = require('egg').Service;

class AdminService extends Service{
    async login(username){
       const {app} = this;
       let result = await app.mysql.get('admin',{username});
       return result;
    }

    async update(id){
        const{app} = this;
        let sql = `UPDATE admin SET nums = nums + 1, logintimes = NOW() WHERE id =?`;
        const result = await app.mysql.query(sql,[id]);
        return result;
    }
}

module.exports = AdminService;