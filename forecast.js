'use strict';

const key = 'GBEyJgkenwfBqh8qGYRXyaByU3EPcDZW';

//get weather information
const getWeather = async function (id) {
	const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
	const query = `${id}?apikey=${key}`;

	const response = await fetch(base + query);
	const data = await response.json();

	return data[0];
};

// get city information
const getCity = async function (city) {
	const base =
		// 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=bf64b2773717f781b6013dfc280804b4';
		// 'http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=bf64b2773717f781b6013dfc280804b4';
		`http://dataservice.accuweather.com/locations/v1/cities/search/`;

	const query = `?apikey= ${key}&q=${city}`;

	const response = await fetch(base + query);
	const data = await response.json();

	return data[0];
};

// getCity('manchester')
// 	.then((data) => {
// 		return getWeather(data.Key);
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});
