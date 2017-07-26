router.get('/getFriends', function(req, res) {
  var username = req.query.username // 通过 req.query获取请求参数
  var friends
  
  //根据请求参数mock数据
  switch (username){
    case 'ruoyu':
      friends = ['小米', '小刚']
      break
    case 'hunger':
      friends = ['小谷', '小花']
      break;
    default:
      friends = ['没有朋友']
  }
  res.send(friends)
})