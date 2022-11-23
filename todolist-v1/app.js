const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){
   let currentDay = new Date();
   let currentDay = currentDay.getDay();


   if(currentDay.getDate() === 6 || currentDay.getDate() === 0){
       res.send("<h1>Yay it's the weekend!</h1>");
   } else {
       res.send("<h1>Hoori! I should to work!</h1>");
   }
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});