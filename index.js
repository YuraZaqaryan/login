const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require("cors");
const app = express()
const PORT = process.env.PORT || 5000

app.use(bodyParser());
app.use(cors())
app.use('/api/auth', require('./routes/Auth.route'))
app.get("/data", (req, res) => {

})

mongoose.connect('mongodb://localhost:27017/log', {
    useNewUrlParser : true,
    useUnifiedTopology : true
},err => {
    if(err) throw err;
    console.log('Connected to MongoDB)')
})
app.listen(PORT, () =>{
    console.log(`Server started on port ${PORT}`)
})