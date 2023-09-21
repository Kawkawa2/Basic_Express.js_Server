const express = require("express");
var app = express();
app.get("/", (req, res) => {
  res.send("Welcome to my Express.js server!");
});

app.listen(3000,()=>{
    console.log('application listening at : 3000')
})