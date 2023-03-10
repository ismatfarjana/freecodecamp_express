var bodyParser = require("body-parser");

let express = require("express");
require("dotenv").config();

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const IP = require("ip");
const ipAddress = IP.address();

console.log("Hello World");

// middleware
const middleware = function (req, res, next) {
  const method = req.method;
  const path = req.path;
  const ip = ipAddress;
  req.time = new Date().toString();
  const string = `${method} ${path} - ${ip}`;
  console.log(string);
  next();
};

app.get("/", middleware, (req, res) => {
  const absolutePath = __dirname + "/views/index.html";
  // res.send("Hello Express");
  res.sendFile(absolutePath);
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", middleware, (req, res) => {
  if (process.env.MESSAGE_STYLE == "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json({ message: "Hello json" });
  }
});

app.get("/now", middleware, (req, res) => {
  res.send({ time: req.time });
});

app.get("/:word/echo", middleware, (req, res) => {
  const word = req.params.word;
  res.send({ echo: word });
});

app.get("/name", middleware, (req, res) => {
  const firstName = req.query.first;
  const lastName = req.query.last;
  res.json({
    name: `${firstName} ${lastName}`,
  });
});

app.post("/name", middleware, (req, res) => {
  const firstName = req.body.first;
  const lastName = req.body.last;
  res.json({
    name: `${firstName} ${lastName}`,
  });
});
module.exports = app;
