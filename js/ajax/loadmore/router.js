router.get('/loadMore', function(req, res) {
  var idx = req.query.index; // 通过 req.query获取请求参数
  var ndpg = req.query.needPage;
  var news = [];
  for (var i = 0; i < ndpg; i++) {
    news.push('新闻' + (parseInt(idx) + i + 1));
  }
  res.send(news);
})
router.post('/loadMore', function(req, res) {
  var idx = req.body.index; // 通过 req.body获取请求参数
  var ndpg = req.body.needPage;
  var news = [];
  for (var i = 0; i < ndpg; i++) {
    news.push('新闻' + (parseInt(idx) + i + 1));
  }
  res.send(news);
})