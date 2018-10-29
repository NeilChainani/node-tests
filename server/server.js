const express = require("express");

var app = express();
app.get("/", (req, res) => {
  res.send({ error: "page not found", name: "app1v0" });
});
app.get("/users", (req, res) => {
  res.send([
    {
      name: "Mike",
      age: 27
    },
    {
      name: "Andrew",
      age: 25
    },
    {
      name: "Jen",
      age: 26
    }
  ]);
});
app.listen(3000);
module.exports.app = app;
