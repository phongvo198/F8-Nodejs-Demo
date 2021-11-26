const Course = require("../models/Course");
const {mutipleMongooesToObject} = require("../../util/mongoose");
class SiteController {
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        //phải gán lại thành objet mới có thiể truy cập properties
        res.render('home',{courses:mutipleMongooesToObject(courses)})
      })
      .catch(next);//tự động truyền tham số lỗi vào next
  }
  //deltal
  search(req, res) {
    res.send("Search........");
  }
}
module.exports = new SiteController();
