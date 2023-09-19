const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fb7ce984damshe8fef734ff222b2p1fda52jsn817686b81417',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
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