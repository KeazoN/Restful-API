const express = require('express');
const fs = require('fs');
const sorguRouters = require('./controller/routers/sorgularRouters');
const data = require('./model/data');
let createData = data;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
	res.end(JSON.stringify(createData));
});

app.use('/sorgula', sorguRouters);

app.listen(5000, () => {
	console.log("Server is started to 5000 PORT");
});