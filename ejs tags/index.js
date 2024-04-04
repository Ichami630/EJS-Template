import express from "express";

const app=express()
const port=3030;

app.get("/",(req,res)=>{
    const data={
        title:"EJS Tags",
        seconds:new Date().getSeconds(),
        fruits:["apples","oranges","mango"],
        htmlContent:"<em>This is some em content</em>",
    };
    res.render("index.ejs",data);
})

app.listen(port,()=>{
    console.log(`listening at port ${port}`);
});