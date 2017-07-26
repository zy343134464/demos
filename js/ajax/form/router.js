router.get('/login', function(req, res) {
  var username = req.query.username // 通过 req.query获取请求参数
  var password = req.query.password
  if (username === "xiaoming" && password === "abcd1234") {
    res.send('登录成功')
  }else{
    res.send('用户名或密码错误')
  }