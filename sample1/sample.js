var express=require('express');
var app=express();
var path=require('path');
app.use(express.static('public'));
app.use(express.static(path.join(__dirname,'public')));
app.listen(8081);
app.get('/',function(req,res){
res.sendFile("C://Users//srinivasarao potnuru//Desktop//crud2//sample1//public//ram.html");
});