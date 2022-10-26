const connection = require("./model");
const express = require("express");
const application = express();
const path = require("path");
const expressHandleBars = require("express-handlebars");
const bodyparser = require("body-parser");
const controller = require("./controller/mainpage");
require("dotenv").config();
application.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

application.set("views", path.join(__dirname, "/views/"));
application.engine(
  "hbs",
  expressHandleBars.engine({
    extname: "hbs",
    defaultLayout: "mainlayout",
    layoutsDir: __dirname + "/views/layouts",
  })
);
application.set("view engine", "hbs");

// application.get("/", (req, res) => {
//   res.render("index", {});
// });

application.use("/", controller);

application.listen(process.env.PORT || 3000, () => {
  console.log("Server Started");
});
