'use strict'

const Service = require('egg').Service;

class UserService extends Service{
    async reg(data){
        const {app} = this;
        let result = await app.mysql.insert('users',data);
        return result;

    }

    async getUserDataUsername(username){
        const {app} = this;
        let result = await app.mysql.get('users',{username:username});
        return result;
    }
}

module.exports = UserService;