var express = require('express');
var router = express.Router();
let User = require('../models/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/user/signup', (req, res, next) => {
  if(!req.body.username || !req.body.password) {
    return res.send({status: false, info: '用户名或密码不能为空'})
  }else if(req.body.password.length < 6){
    return res.send({status: false, info: '密码长度太短'})
  }
  let user = new User()
  user.username = req.body.username
  user.password = req.body.password

  console.log("@@@@@@@@@@@@@@@@@@@@@")
  console.log(user)
  user.save((err, doc) => {
    if(err){
      console.log("error:\"注册用户失败\"")
      return 
    }
    res.redirect('/')
  })
})


module.exports = router;
