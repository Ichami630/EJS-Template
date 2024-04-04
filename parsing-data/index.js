import  express from "express";
import bodyParser from "body-parser"
import { name } from "ejs";

const app=express();
const port=3000;
const data={
    text:"Enter your name",
}

app.use(bodyParser.urlencoded({extended:false}));
app.get("/",(req,res)=>{
    res.render("index.ejs",data);
})

app.post("/submit",(req,res)=>{
    let name=req.body["fname"] + req.body["lname"];
    data.text=`There are ${name.length} letters in your name.`;
    res.redirect("/");
})

app.listen(port,()=>{
    console.log("listening at port "+ port);
})