const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app  = express();
const http = require("http");

app.use(cors({
    origin: '*'
}))

app.get('/',function(req,res){
    let endpoint = 'http://www.wienerlinien.at/ogd_realtime/monitor?DIVA=' + req.query.diva
    console.log(endpoint)
    fetch(endpoint).then(resp => resp.json()).then(resp => res.send(resp))
   
})

app.listen(3000)