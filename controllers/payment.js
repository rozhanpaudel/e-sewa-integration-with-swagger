var express = require("express");
var router = express.Router();
const axios = require("axios");
const FormData = require("form-data");

const { XMLParser } = require("fast-xml-parser");

router.get("/failed", function (req, res, next) {
  res.json({
    isSuccess: false,
    msg: "Failed while performing the transcations",
  });
});

router.get("/success", async function (req, res, next) {
  let parser = new XMLParser();
  const amount = 100; //used to check fraud transcations for products this value is extracted from database

  let formData = new FormData();
  formData.append("amt", req.query.amt);
  formData.append("rid", req.query.refId);
  formData.append("pid", req.query.oid);
  formData.append("scd", "EPAYTEST");

  try {
    const data = await axios.post(
      "https://uat.esewa.com.np/epay/transrec",
      formData,
      {
        headers: {
          ...formData.getHeaders(),
        },
      }
    );

    let parsedData = parser.parse(data.data);

    if (parsedData.response.response_code == "Success") {
      //todo after successful payment
      return res.json({
        isSuccess: true,
        msg: "Thank you for the payment ! Payment Received !!",
      });
    }

    throw "Fraud Transcation Detected !!";
  } catch (err) {
    res.status(500).json({
      isSuccess: false,
      msg: "Error Occured at Server Side",
      error: err,
    });
  }
});

module.exports = router;
