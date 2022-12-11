const fs = require('fs');
const data = require('../../model/data');
let orjData = JSON.stringify(data);
let jsonData = JSON.parse(orjData);

module.exports.sorgula = function(req, res) {
	res.end(orjData);
}

module.exports.musteriTemsilcisi = function(req, res) {
	jsonData.data.team.forEach((i) => {
		console.log(i.fullName);
	});
}

module.exports.calismaSaatleri = function(req, res) {
	console.log("Çalışma Saatimiz:" + jsonData.data.settings.hour);
}

module.exports.musteriTemsilcisiId = function(req, res) {
	let params = req.params;
	jsonData.data.team.forEach((i) => {
		if (params.id == i.id) {
			console.log(i.fullName);
		}
	});
}

module.exports.slot = function(req, res) {
	console.log(jsonData.data.settings.slotSecond);
}

module.exports.randevuId = function(req, res) {
	let params = req.params
	jsonData.data.appointments.forEach((x) => {
		if(params.id == x.id) {
			jsonData.data.team.forEach((y) => {
				if(y.id == x.id) {
					console.log('Temsilci:' + y.fullName);
				}
			});
			jsonData.data.users.forEach((z) => {
				if(z.id == x.id) {
					console.log('Kullanıcı:' + z.fullName);
				}
			});
		}
	});
}