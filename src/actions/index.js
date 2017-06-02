const API_KEY = '2a64f28a5cbb329dff8bdddf27e7c429';

const FETCH_WEATHER = 'FETCH_WEATHER' //to keep the code consistant between the action creator and the reducer

export fetchWeather => () {
	return{
		type : FETCH_WEATHER
	};
	
}