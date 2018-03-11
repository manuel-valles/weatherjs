// Init weather object
const weather = new Weather('Boston', 'MA');

// Init UI object
const ui = new UI();

// weather.changeLocation('Miami', 'FL');

// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather(){
  weather.getWeather()
    .then(results => ui.paint(results))
    .catch(err => console.log(err));
}