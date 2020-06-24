var http = require('http');
var express = require('express');
http.createServer(function(req,res){
    console.log(req.params)
}).listen(3000)