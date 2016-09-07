var express = require('express');
var router = express.Router();
var formidable = require('formidable'),
  fs = require('fs'),
  TITLE = '上传',
  AVATAR_UPLOAD_FOLDER = '/images/'
//路由参数请求，参数不可变
router.get('/:Id/:Name', function (req, res, next) {
  res.send('Id是：' + JSON.stringify(req.params));
});
//带参请求，参数是可变的
router.get('/', function (req, res, next) {
  res.send('Id是：' + JSON.stringify(req.query));
});
// 网站首页接受 POST 请求
router.post('/', function (req, res, next) {
  debugger;
  res.send(JSON.stringify(req.body));
});
router.post('/file', function (req, res, next) {
  var form = new formidable.IncomingForm();   //创建上传表单
  form.encoding = 'utf-8';		//设置编辑
  form.uploadDir = 'public' + AVATAR_UPLOAD_FOLDER;	 //设置上传目录
  form.keepExtensions = true;	 //保留后缀
  form.maxFieldsSize = 2 * 1024 * 1024;   //文件
  form.parse(req, function (err, fields, files) {
    try {
      if (err) {
        res.send(500, err);
        return;
      }
      var extName = '';  //后缀名
      switch (files.f.type) {
        case 'image/pjpeg':
          extName = 'jpg';
          break;
        case 'image/jpeg':
          extName = 'jpg';
          break;
        case 'image/png':
          extName = 'png';
          break;
        case 'image/x-png':
          extName = 'png';
          break;
      }
      if (extName.length == 0) {
        fs.unlink(files.f.path, function () {
          res.send(500, "只支持图片格式");
        })
        //删除已上传的文件
      } else {
        var f = Math.random() + '.' + extName;
        var newPath = form.uploadDir + f;
        fs.renameSync(files.f.path, newPath);
        res.send(200, { msg: "上传成功！" });
      }

    } catch (err) {
       res.send(500,{err:"操作错误"});
    }
  });
  next();
});
// /user 节点接受 PUT 请求
router.put('/', function (req, res, next) {
  res.send('Got a PUT request at /user');

});

// /user 节点接受 DELETE 请求
router.delete('/', function (req, res, next) {
  res.send('Got a DELETE request at /user');
});
module.exports = router;