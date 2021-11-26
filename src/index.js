const express = require("express");
const morgan = require("morgan");
const path = require("path");
const route = require("./routes"); //=>index route
const db = require("./config/db");
const methodOverride = require("method-override");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

//Connect db
db.connect();

//middleware giúp nhận dữ liệu body
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());
app.use(methodOverride("_method"));
//file public
app.use(express.static(path.join(__dirname, "public"))); //.../img/f8_text_logo.png
app.use(morgan("combined"));
//tempalte engine
app.engine(
    ".hbs",
    handlebars({ extname: ".hbs", helpers: require("./util/helpers") })
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resourses/views"));

route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});