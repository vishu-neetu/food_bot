const { static } = require('express');
const express = require('express');
const path = require('path')

const apiRoutes = require("./routes/apiRoutes");

const app = express();

app.use(express.json());

// app.locals.users = require('./order_summary.json');

app.get('/orderSummary',(req,res)=>{
    res.sendFile(__dirname+'/views/order_summary.html')
})
// console.log(users)
app.use('/', express.static(path.join(__dirname, 'views')));
// app.use("/orderSummary", express.static(path.join(__dirname, 'views/order_summary')));
app.use('/backend', apiRoutes);
// exports =  module.exports = users;


app.listen(3000,console.log('server started'));