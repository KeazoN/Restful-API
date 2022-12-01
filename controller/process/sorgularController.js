const fs = require('fs');

module.exports.sorgula = function(req, res) {
	fs.readFile('./data/data.json', 'utf8', (err, data) => {
		let jsonData = JSON.parse(data);
		res.end(JSON.stringify(jsonData));
	});
}

module.exports.musteriTemsilcisi = function(req, res) {
	fs.readFile('./data/data.json', 'utf8', (err, data) => {
		let jsonData = JSON.parse(data);
		jsonData.representative.forEach((i) => {
			console.log(i.name);
		});
	});
}

module.exports.calismaSaatleri = function(req, res, next) {
	fs.readFile('./data/data.json', 'utf8', (err, data) => {
		let jsonData = JSON.parse(data);
		console.log(jsonData.settings.hour);
	});
	next();
}

module.exports.musteriTemsilcisiId = function(req, res) {
	let params = req.params;
	fs.readFile('./data/data.json', 'utf8', (err, data) => {
		let jsonData = JSON.parse(data);
		jsonData.representative.forEach((i) => {
			if (params.id == i.id) {
				console.log(i.name);
			}
		});
	});
}

module.exports.randevu = function(req, res) {
	fs.readFile('./data/data.json', 'utf8', (err, data) => {
		let jsonData = JSON.parse(data);
		let productRepresId = jsonData.product[0].representativeId;
		jsonData.representative.forEach((x) => {
			if(x.id === productRepresId) {
				console.log(x.name);
			}
		})
	});
}

module.exports.slot = function(req, res) {
	fs.readFile('./data/data.json', 'utf8', (err, data) => {
		let jsonData = JSON.parse(data);
		console.log(jsonData.settings.slotSecond);
	});
}

module.exports.randevuId = function(req, res) {
	let params = req.params
	fs.readFile('./data/data.json', 'utf8', (err, data) => {
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
}