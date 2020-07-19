const { createServer } = require("http");
const { join, resolve } = require("path");
const { parse } = require("url");
const next = require("next");

const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = app.getRequestHandler();
console.log("running server.js");
app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    // handle GET request to /service-worker.js
    console.log("pathname: ", pathname);
    if (pathname === "/service-worker.js") {
      const filePath = join(__dirname, ".next", pathname);
      console.log("filepath: ", filePath);
      console.log("res: ", res);
      //   app.serveStatic(req, res, filePath);
      res.sendFile(resolve(__dirname, ".next", "service-worker.js"));
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(3000, () => {
    console.log(`> Ready on http://localhost:${3000}`);
  });
});
