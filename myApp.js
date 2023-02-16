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
  res.json({ message: "Hello json" });
});

module.exports = app;
