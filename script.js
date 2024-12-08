const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fb7ce984damshe8fef734ff222b2p1fda52jsn817686b81417',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const cityName = document.getElementById('cityName');
            const temp = document.getElementById('temp');
            const humidity = document.getElementById('humidity');
            const feels_like = document.getElementById('feels_like');
            const max_temp = document.getElementById('max_temp');
            const min_temp = document.getElementById('min_temp');
            const sunrise = document.getElementById('sunrise');
            const sunset = document.getElementById('sunset');
            const wind_degrees = document.getElementById('wind_degrees');
            const wind_speed = document.getElementById('wind_speed');
            const submit = document.getElementById('submit');
            const city = document.getElementById('city');
const getWeather=(city)=>{
cityName.innerHTML=city
fetch(url+city,options)
.then(response=>response.json())
.then(response=>{
    
    temp.innerHTML=response.temp
    humidity.innerHTML =response.humidity
    feels_like.innerHTML=response.feels_like
    max_temp.innerHTML=response.max_temp
    min_temp.innerHTML=response.min_temp
    sunrise.innerHTML=response.sunrise
    sunset.innerHTML=response.sunset
    wind_degrees.innerHTML=response.wind_degrees
    wind_speed.innerHTML=response.wind_speed
    
    
    
    
    
    console.log(response)})
.catch(err=>console.err(err));}
submit.addEventListener("click",(e)=>
{e.preventDefault()
    getWeather(city.value)
})
getWeather("Delhi")