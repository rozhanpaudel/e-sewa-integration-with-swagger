const APIError = require("../errors/apiError");

function apiErrorHandler(err, req, res, next) {
  console.log(err); //use this in development mode
  if (err instanceof APIError) {
    return res.status(err.statusCode).json(err.msg);
  }

  return res.status(500).json({
    msg: "Something Went Wrong",
  });
}

module.exports = apiErrorHandler;
