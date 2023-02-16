let express = require("express");
require("dotenv").config();
let app = express();
process.env.MESSAGE_STYLE == "uppercase";
console.log(process.env.MESSAGE_STYLE);

console.log("Hello World");

app.get("/", (req, res) => {
  const absolutePath = __dirname + "/views/index.html";
  // res.send("Hello Express");
  res.sendFile(absolutePath);
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (request, response) => {
  if (process.env.MESSAGE_STYLE == uppercase) {
    response.json({ message: "HELLO JSON" });
  } else {
    response.json(message);
  }
});

module.exports = app;
