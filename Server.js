const express = require("express");
const path = require("path");
const app = express();


app.use(express.static(path.join(__dirname,"Public")));

app.get("/", async(req,res)=>{
    res.sendFile(path.join( __dirname + "/Public/landingPage.html"));
});



app.listen(3000,()=>{
    console.log("server is running on http://localhost:3000")
});