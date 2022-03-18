var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

var indexRouter = require("./controllers/index");
var usersRouter = require("./controllers/payment");
const swaggerOptions = require("./configs/swagger.config");
const apiErrorHandler = require("./middlewares/error.handler");

const specs = swaggerJsDoc(swaggerOptions);
const port = 8085;

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/payment", usersRouter);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use((req, res, next) => {
  return res.status(404).json({
    msg: "404 Page Not Found",
  });
});

app.use(apiErrorHandler);

app.listen(port, (err, result) => {
  if (err) console.log(err);
  console.log("App is listening at Port", port);
});
