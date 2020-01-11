'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/my',controller.my.index);
  router.get('/user',controller.user.info);
  //注册 post
  router.post('/reg',controller.user.reg);
  //获取关键词信息
  router.get('/key',controller.keywords.key.hq);
  //管理员路由
  router.post('/login',controller.admin.login);

  //文件上传接口
  router.post('/upload',controller.upload.index);

  //添加课程图片的接口
  router.post('/addimg',controller.course.add);
  //课程列表接口
  router.get('/course/index',controller.course.index);
//课程删除接口
  router.get('/course/del',controller.course.del);
  //根据cid获取课程原始信息
  router.get('/course/get',controller.course.get);
  //修改课程的API
  router.post('/course/edit',controller.course.edit);

  

  


};
