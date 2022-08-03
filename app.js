const express=require("express")
const app = express()
const path= require("path")
app.set("port", 3000)

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req,res)=>{
    res.send("Bienvenidos")
})

app.listen(app.get("port"), ()=> {
    console.log(`Aplicacion  corriendo en port ${app.get("port")}`)
})