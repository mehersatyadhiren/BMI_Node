const express=require("express");
const bodyParser=require("body-parser");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(request,response){
    response.sendFile(__dirname+"/index.html");
})

app.post("/bmi",function(request,response){
    var weight=request.body.weight;
    var height=request.body.height;

    var bmi=(weight)/Math.pow(height,2);
    response.send("Your BMI is: "+bmi);
})

app.listen(2000,function(){
    console.log("On port 2000");
})