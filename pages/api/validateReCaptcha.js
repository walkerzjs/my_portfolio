import { request } from "express";
import { secretKey } from "../../2_containers/Shared/ReCaptcha";
const axios = require("axios");

export default (req, res) => {
  const requestObject = {
    secret: secretKey,
    response: req.query.token,
  };

  axios({
    method: "post",
    url: "https://www.google.com/recaptcha/api/siteverify",
    params: requestObject,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then((response) => {
      if (response.data.success === true) {
        res.statusCode = 200;
        res.end(
          JSON.stringify({
            success: true,
          })
        );
      } else {
        res.statusCode = 200;
        res.end(
          JSON.stringify({
            success: false,
            "error-codes": response.data["error-codes"],
          })
        );
      }
      res.end();
    })
    .catch((error) => {
      res.statusCode = 500;
      res.end(
        JSON.stringify({
          success: false,
          "error-codes": error.message,
        })
      );
    });
};
