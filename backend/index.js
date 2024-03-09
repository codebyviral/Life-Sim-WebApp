const express = require('express')

const app = express()
const port = 4500
app.use("/",(req,res)=>{
    res.send(`Server is running on port ${port}`)
})

app.listen(port,console.log(`Server has started on port ${port}`))