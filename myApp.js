require("dotenv").config();
let express = require("express");
let app = express();

console.log("Hello World");

app.get("/", (req, res) => {
  const absolutePath = __dirname + "/views/index.html";
  // res.send("Hello Express");
  res.sendFile(absolutePath);
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  const msgStyle = process.env.MESSAGE_STYLE;
  let message;
  if (msgStyle === "uppercase") {
    response = "Hello World".toUpperCase();
  } else {
    response = "Hello World";
  }
  res.json({ message: message });
});

module.exports = app;
