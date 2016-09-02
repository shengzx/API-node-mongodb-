var express = require('express');
var router = express.Router();
router.get('/:Id/:Name', function (req, res,next) {
  res.send('Id是：'+JSON.stringify(req.params));
});

// 网站首页接受 POST 请求
router.post('/', function (req, res,next) {
  res.send('Got a POST request');
});

// /user 节点接受 PUT 请求
router.put('/', function (req, res,next) {
  res.send('Got a PUT request at /user');
});

// /user 节点接受 DELETE 请求
router.delete('/', function (req, res,next) {
  res.send('Got a DELETE request at /user');
});
module.exports = router;