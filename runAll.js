const express =require('express');
const app=express();
const path=require('path');
app.use(express.static(path.join(__dirname,'client/build')));
app.get('/',function(req,res){
  res.sendFile(__dirname+"/client/build/index.html");
});
app.listen(4000,()=>{console.log("hellsso")});

