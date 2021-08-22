const express = require("express");
const morgan = require("morgan");
const path = require("path");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

//file public
app.use(express.static(path.join(__dirname,'public')));//.../img/f8_text_logo.png
app.use(morgan("combined"));
//tempalte engine
app.engine(".hbs", handlebars({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resourses/views"));

app.get("/trang-chu", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
