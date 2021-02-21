const express = require('express')
const connect  = require ('./config/connect')

const app = express()

//parse
app.use(express.json())

// router
app.use("/api/persons", require("./routes/person"));


// connectdb
connect();

// run server
const port = process.env.PORT || 7000
app.listen(port, err=>{
    err? console.log(err) : console.log(`the server is running on ${port}`)
})