const express = require('express')
const app = express()
const port = 1000;

app.get('/farmacia',(req, res)=>{
    res.send("Farmacia")
})

app.listen(port,()=>{
    console.log("Farmacia online")
})
