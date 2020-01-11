'use strict'

const Service = require('egg').Service;

class KeyService extends Service{
    async hq(limit=5,offset=0){
        let results = await this.app.mysql.select('20wt',{ // 搜索 post 表
            // where: { status: 'draft', author: ['author1', 'author2'] }, // WHERE 条件
            columns: ['id', 'kw','c1'], // 要查询的表字段
            orders: [['id','asc']], // 排序方式
            limit, // 返回数据量
            offset // 数据偏移量
          });
          return results;
    }
}

module.exports = KeyService;