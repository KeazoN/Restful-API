const express = require('express');
const fs = require('fs');
const sorguRouters = require('./controller/routers/sorgularRouters');
const { faker } = require('@faker-js/faker');
const newData = {
	"users": [
		{
			"id": faker.datatype.number(100),
			"name": faker.name.fullName()
		}
	]
}

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
});

app.use('/sorgula', sorguRouters);

app.listen(5000);