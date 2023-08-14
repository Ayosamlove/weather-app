'use strict';

const cityForm = document.querySelector('form');

const updateCity = async function (city) {
	// console.log(city);

	const cityDetails = await getCity(city);
	const weather = await getWeather(cityDetails.Key);

	return {
		cityDetails: cityDetails,
		weather: weather,
	};
};

cityForm.addEventListener('submit', (e) => {
	e.preventDefault();

	//get city value
	const city = cityForm.city.value.trim();
	cityForm.reset();

	//update UI with new city value
	updateCity(city)
		.then((data) => console.log(data))
		.catch((err) => console.log(err));
});
