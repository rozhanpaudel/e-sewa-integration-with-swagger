class APIError {
  constructor(statusCode, msg) {
    this.statusCode = statusCode;
    this.msg = msg;
  }
  static BadRequest(msg) {
    return new APIError(400, msg);
  }
  static InternalServerError(msg) {
    return new APIError(500, msg);
  }
}

module.exports = APIError;
