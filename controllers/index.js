var express = require('express');
var router = express.Router();

/**
 * @swagger
 * /
 * get:
 *    description: Used to render the Page that executes payment
 * responses:
 * '200':
 *    description: A successfull response
 */
router.get('/', function (req, res, next) {
  res.render("index.ejs")
});

module.exports = router;
