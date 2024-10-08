import Cors from "cors";
import initMiddleware from "../../Shared/initMiddleWare";
import { secretKey } from "../../main_containers/Shared/ReCaptcha";
const axios = require("axios");
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS"],
    origin: [
      "https://my-portfoliojsz.com",
      "http://localhost:3000",
      "http://localhost",
      "http://localhost:1234",
    ],
  })
);

export default async (req, res) => {
  await cors(req, res);
  const requestObject = {
    secret: secretKey,
    response: req.query.token,
  };
  // console.log("req obj: ", requestObject);

  axios({
    method: "post",
    url: "https://www.google.com/recaptcha/api/siteverify",
    params: requestObject,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Set-Cookie": "SameSite=None; Secure"
    },
  })
    .then((response) => {
      if (response.data.success === true) {
        res.statusCode = 200;
        res.json({ success: true });
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
