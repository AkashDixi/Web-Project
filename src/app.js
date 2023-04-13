
const express =require("express");
const path=require("path");
const app = express();
const hbs =require("hbs")//when you use partials then you need to require hbs
const port =8000;

const staticPath =path.join(__dirname,"../public")
const template_path =path.join(__dirname,"../templates/views")
const partials_path =path.join(__dirname,"../templates/partials")


app.set("view engine","hbs")
app.set("views",template_path)
hbs.registerPartials(partials_path)//and need to register partal with view engine you are using..
app.use(express.static(staticPath))
                                                     //app.get(route,callback) Routing
app.get("",(req,res)=>{ 
    // res.send("welcome :)")
    res.render("index")
})
app.get("/about",(req,res)=>{ 
    // res.send("welcome to about :)")
    res.render("about")
})
app.get("/weather",(req,res)=>{ 
    res.render("weather")
})
app.get("*",(req,res)=>{ 
    res.render("404error",{
        err: "Oops eror occoured"
    })
})

app.listen(port,()=>{
    console.log(`Listening to port at ${port}`)
})