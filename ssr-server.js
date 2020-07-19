const express = require("express");
const next = require("next");
const { join } = require("path");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    // server.get("/service-worker.js", (req, res) => {
    //   res.sendFile(join(__dirname, ".next", "service-worker.js"));
    // });
    server.get("*", (req, res) => {
      //   console.log("req: ", req.originalUrl);
      if (req.originalUrl === "/service-worker.js") {
        return res.sendFile(join(__dirname, ".next", "service-worker.js"));
      } else {
        return handle(req, res);
      }
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });

/**   if (pathname === "/service-worker.js") {
      const filePath = join(__dirname, ".next", pathname);
      console.log("filepath: ", filePath);
      console.log("res: ", res);
      //   app.serveStatic(req, res, filePath);
      res.sendFile(resolve(__dirname, ".next", "service-worker.js"));
    } else {
      handle(req, res, parsedUrl);
    } */
