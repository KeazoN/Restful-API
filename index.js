const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
	fs.readFile('data.json', 'utf8', (err, data) => {
		let jsonData = JSON.parse(data);
		res.end(JSON.stringify(jsonData));
	});
});

app.get('/sorgula/musteriTemsilcisi', (req, res) => {
	fs.readFile('data.json', 'utf8', (err, data) => {
		let jsonData = JSON.parse(data);
		jsonData.representative.forEach((i) => {
			console.log(i.name);
		});
	});
});

app.get('/sorgula/musteriTemsilcisi/:id', (req, res) => {
	let params = req.params;
	fs.readFile('data.json', 'utf8', (err, data) => {
		let jsonData = JSON.parse(data);
		jsonData.representative.forEach((i) => {
			if (params.id == i.id) {
				console.log(i.name);
			}
		});
	});
});

app.get('/sorgula/calismaSaatleri', (req, res) => {
	fs.readFile('data.json', 'utf8', (err, data) => {
		let jsonData = JSON.parse(data);
		console.log(jsonData.settings.hour);
	});
});

app.get('/sorgula/randevu', (req, res) => {
	fs.readFile('data.json', 'utf8', (err, data) => {
		let jsonData = JSON.parse(data);
		let productRepresId = jsonData.product[0].representativeId;
		jsonData.representative.forEach((x) => {
			if(x.id === productRepresId) {
				console.log(x.name);
			}
		})
	});
});

app.get('/sorgula/slot', (req, res) => {
	fs.readFile('data.json', 'utf8', (err, data) => {
		let jsonData = JSON.parse(data);
		console.log(jsonData.settings.slotSecond);
	});
});

app.get('/sorgula/randevu/:id', (req, res) => {
	let params = req.params
	fs.readFile('data.json', 'utf8', (err, data) => {
		let jsonData = JSON.parse(data);
		jsonData.product.forEach((x) => {
			if(params.id == x.id) {
				jsonData.representative.forEach((y) => {
					if(y.id == x.representativeId) {
						console.log('Temsilci:' + y.name)
					}
				});
				jsonData.users.forEach((z) => {
					if(z.id == x.usersId) {
						console.log('Kullanıcı:' + z.name)
					}
				});
			}
		});
	});
});

app.listen(5000);