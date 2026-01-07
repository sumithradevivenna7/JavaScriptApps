const express = require("express");
const app = express();
function rootHandler(req,res){
    res.send("Hello, Express!");
}
function hellowithName(req,res){
    var name = req.params.name;
    res.send("Hello" + name);
}
app.get("/",rootHandler);
app.get("hello/:name",hellowithName);
app.listen(3000,() => {
  console.log(`Server running on http://localhost:3000`)
});

