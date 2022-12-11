const { faker } = require('@faker-js/faker');
let team = [];
let	users = [];
let	appointments = [];
let randomHour = faker.date.future();

function fillData(){
	for (let i = 0; i <= 10; i++) {
		let fullName = faker.name.fullName();
		team.push({
			"id": i,
			"fullName": fullName,		
		})
	}
	for (let i = 0; i <= 10; i++) {
		let fullName = faker.name.fullName();
		users.push({
			"id": i,
			"fullName": fullName,
		})
	}
	for (let i = 0; i <= 10; i++) {
		let teamsId = faker.datatype.number(10);
		let userId = faker.datatype.number(10);
		let appointmentDate = faker.date.future();
		appointments.push({
			"id": i,
			"teamsId": teamsId,
			"usersId": userId,
			"meettingDate": appointmentDate,
		})
	}
	return {
		"team": team,
		"users": users,
		"settings": {
			"hour": randomHour,
			"slotSecond": 20
		},
		"appointments": appointments,
		
	}
}

module.exports.data = fillData();