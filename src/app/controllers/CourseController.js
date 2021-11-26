const Course = require("../models/Course");
const {
  mutipleMongooesToObject,
  MongooesToObject,
} = require("../../util/mongoose");

class CourseController {
  //deltal courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: MongooesToObject(course) });
      })
      .catch(next);
  }

  //[GET] courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  //[POST] courses/store

  store(req, res, next) {
    req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(req.body);
    course
      .save()
      .then(() => {
        res.redirect("/");
      })
      .catch(next);
  }
  //[GET] courses/:id/edit /////quyry là biến sao dấu ?, params là sao dấu "/"
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) => {
        console.log(course);
        res.render("courses/edit", { course: MongooesToObject(course) });
      })
      .catch(next);
  }
  //[PUT] courses/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  //[PATCH] courses/:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  //[DELETE] courses/:id
  destroy(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }
  //[DELETE] courses/:id/force
  forceDestroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }
  //[POST] courses/handle-form-actions
  handleFormActions(req, res, next) {
    switch (req.body.action) {
      case "delete":
        Course.delete({ _id: { $in: req.body.courseIds} })//Truyền vào 1 mảng dùng $in:
          .then(() => {
            res.redirect("back");
          })
          .catch(next);

        break;

      default:
        res.json({ message: "Invalid action" });
        break;
    }
  }
}
module.exports = new CourseController();
