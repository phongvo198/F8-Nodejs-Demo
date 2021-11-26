class NewsController {
  //[GET] index news
  index(req, res) {
    res.send('news..........');
  }
  //deltal
  show(req, res) {
    res.send('news..detal........');
  }
}
module.exports = new NewsController();
