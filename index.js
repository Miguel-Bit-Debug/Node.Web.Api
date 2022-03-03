const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const app = express()
const router = require('./src/routes/routes')
const port = 4000
const connectionString = 'mongodb://localhost:27017';

//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use("/v1/api", router)

mongoose.connect(connectionString, {
    dbName: 'Node-api'
}).then(() => {
    console.log("mongodb up!")
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error);
})
