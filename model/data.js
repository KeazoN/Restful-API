const { faker } = require('@faker-js/faker');
let data = [];

function fillData(){
	for (let i = 0; i <= 10; i++) {
		let fullName = faker.name.fullName();
		let workingHour = faker.date.future();
		data.push({
			"id": i,
			"fullName": fullName,
			"workingHour": workingHour,
		})
	}

	return {
		"team": data,
		
	}
}

module.exports.fillData = fillData();