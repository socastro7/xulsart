const PORT = process.env.PORT || 3000
const express = require("express");
const path = require("path")
const app = express();

//dejo accesible la carpeta public
app.use(express.static(path.join(__dirname, "public")));

//accedo con localhost:3000
app.listen(PORT, ()=>{console.log("Servidor corriendo en el puerto", PORT)});

//parametros: 1--> path, 2--> handler, funcion controladora
app.get("/", (req,res)=>{   
    res.sendFile(path.join(__dirname, "./views/home.html")) });

