router.get('/loadMore', function(req, res) {
  var index = req.query.index; // 通过 req.query获取请求参数
  var len = req.query.len;
  var news = [];
  for (var i = 0; i < len; i++) {
    news[i] = '新闻' + (parseInt(index) + i + 1);
  }
  res.send(news);
})