var express = require('express');
var app 	= require('express')();
var server 	= require('http').Server(app);
var path 	= require('path');

module.exports = app;

// print data of server
app.get('/', function (req, res) {
	res.send('Point Of Sale');
});

app.use('/inventory', require('./inventory'));
app.use('/transactions', require('./transactions'));
