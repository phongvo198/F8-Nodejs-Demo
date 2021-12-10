const Course = require("../models/Course");
const {
  mutipleMongooesToObject,
  MongooesToObject,
} = require("../../util/mongoose");

class MeController {

  //[POST] /me/stored/courses
  storedCourses(req, res, next) {
    let courseQuery = Course.find({});

    if(req.query.hasOwnProperty('_sort')){
      courseQuery=courseQuery.sort({
        [req.query.column]:req.query.type
      });
    };

    Promise.all([courseQuery,Course.countDocumentsDeleted()])
      .then(([courses,countDeleted])=>{
        res.render('me/storedCourses',{
          courses:mutipleMongooesToObject(courses),
          countDeleted,
        });
      })
      .catch(next);
    
  }
  trashCourses(req, res, next) {
    Course.findDeleted({})
    .then(courses=>res.render('me/trashCourses',{
      courses:mutipleMongooesToObject(courses),
    }))
    .catch(next);
  }
}
module.exports = new MeController();
