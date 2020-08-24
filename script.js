
let $url = "https://www.prevision-meteo.ch/services/json/";
let $request = fetch("https://www.prevision-meteo.ch/services/json/toulon")
const $temp = document.querySelector("#resTemp");
const $icon = document.querySelector("#resIcon");
const $city = document.querySelector("#resCity");
const $date = document.querySelector("#resDate");
const $windDir = document.querySelector("#windDirection");
const $windSpeed = document.querySelector("#windSpeed");
const $weather = document.querySelector("#weather-result");
const $hourly = document.querySelector("#hourlyData");
const $body = document.querySelector("#body");

        $request.then(function(response){
            return response.json();
        })
        .then(function(askWeather){
            updatePage(askWeather);
        })
        
var input = document.getElementById("searchInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("searchBtn").click();
  }
});
        
function updateWeather(){
    let $cityWanted = document.getElementById("searchInput").value;
    fetch($url + $cityWanted)
    .then(response => response.json())
    .then(function(response) {
        updatePage(response);
    })
    .catch(function () {
        alert('Erreur');
    });
}

const imagesForConditions = {
        "Ensoleillé":"https://observatorcl.info/wp-content/uploads/2020/01/ANM.jpg",
        'Ciel voilé':'https://images7.alphacoders.com/680/thumb-1920-680835.jpg',
        'Faiblement nuageux':'https://images5.alphacoders.com/431/thumb-1920-431971.jpg',
        'Eclaircies':'https://wallpaperaccess.com/full/1167968.jpg',
        'Stratus se dissipant':'https://images7.alphacoders.com/680/thumb-1920-680835.jpg',
        'Fortement nuageux':'https://images4.alphacoders.com/102/thumb-1920-1028191.jpg',
        'Développement nuageux':'https://images4.alphacoders.com/913/thumb-1920-913354.jpg',
        'Stratus':'https://images5.alphacoders.com/431/thumb-1920-431971.jpg',
        'Nuit claire':'https://images3.alphacoders.com/824/thumb-1920-824826.jpg',
        'Nuit bien dégagée':'https://images5.alphacoders.com/511/thumb-1920-511222.jpg',
        'Nuit légèrement voilée':'https://images3.alphacoders.com/161/thumb-1920-161369.jpg',
        'Nuit claire et stratus':'https://images8.alphacoders.com/676/thumb-1920-676644.jpg',
        'Nuit nuageuse':'https://images7.alphacoders.com/937/thumb-1920-937486.jpg',
        'Nuit avec développement nuageux':'https://images5.alphacoders.com/992/thumb-1920-992126.jpg',
        'Averses de pluie faible':'https://images8.alphacoders.com/714/thumb-1920-714894.jpg',
        'Pluie faible':'https://images3.alphacoders.com/986/thumb-1920-986363.jpg',
        'Averses de pluie modérée':'https://images5.alphacoders.com/312/thumb-1920-312372.jpg',
        'Averses de pluie forte':'https://images.alphacoders.com/108/thumb-1920-1084974.jpg',
        'Couvert avec averses':'https://images2.alphacoders.com/783/thumb-1920-783245.jpg',
        'Pluie forte':'https://images2.alphacoders.com/597/thumb-1920-597905.jpg',
        'Pluie modérée':'https://images7.alphacoders.com/103/thumb-1920-1036817.jpg',
        'Faiblement orageux':'https://images6.alphacoders.com/854/thumb-1920-854198.jpg',
        'Orage modéré':'https://images.alphacoders.com/453/thumb-1920-453238.jpg',
        'Fortement orageux':'https://images2.alphacoders.com/596/thumb-1920-596907.jpg',
        'Nuit faiblement orageuse':'https://images8.alphacoders.com/697/thumb-1920-697542.jpg',
        'Averses de neige faible':'https://images5.alphacoders.com/341/thumb-1920-341015.jpg',
        'Neige faible':'https://images3.alphacoders.com/116/thumb-1920-116827.jpg',
        'Neige modérée':'https://images7.alphacoders.com/876/thumb-1920-876256.jpg',
        'Neige forte':'https://images.alphacoders.com/106/thumb-1920-106423.jpg',
        'Pluie et neige mêlée faible':'https://images.alphacoders.com/106/thumb-1920-106423.jpg',
        'Pluie et neige mêlée modérée':'https://images6.alphacoders.com/899/thumb-1920-899414.jpg',
        'Pluie et neige mêlée forte':'https://images6.alphacoders.com/793/thumb-1920-793091.jpg',
        'Nuit avec averses de neige faible':'https://images2.alphacoders.com/814/thumb-1920-814106.jpg',
        'Brouillard':'https://images3.alphacoders.com/929/thumb-1920-929605.jpg',
    }

function updatePage(weather){
    $temp.textContent = weather.current_condition.tmp + "°C";
    $city.textContent = weather.city_info.name;
    $date.textContent = "Nous sommes le " + weather.fcst_day_0.day_long +" "+ weather.current_condition.date;
    $icon.setAttribute("src",weather.current_condition.icon_big);
    $weather.textContent = weather.current_condition.condition;
    $windDir.textContent = "Direction du vent: " + weather.current_condition.wnd_dir;
    $windSpeed.textContent = "La vitesse du vent est de " + weather.current_condition.wnd_spd + " km/h";

    let result = getImagesForConditions(weather.current_condition.condition);
    document.body.style.backgroundImage = `url(${result}`;
    
    let $hourly = Object.entries(weather.fcst_day_0.hourly_data);
    let html ="";
    for(i = 0 ; i < $hourly.length ; i++){
        const [hour, data,] = $hourly[i];
        html += `<div class="dataHourly">`+ `<p>`+ hour + " "+`</p>`+  data.TMP2m + "°" +`<p>` +
                `<img src="`+ data.ICON +`"></img>`+` </p>` +`</div>`;
        hourlyData.innerHTML = html;
    }
    dayOne = document.querySelector("#day");
    dayOne.innerHTML = "";
     for(i = 1 ; i < 5 ; i++){
         const data = "fcst_day_"+[i];
                      dayOne.innerHTML += `<div class="dayByDay col-3">`+ `<p>`+weather[data].date + " " +`</p>` + `<p>` + weather[data].tmin + "°" + `/` +
                      weather[data].tmax + "°" + `<p>` +  weather[data].day_long +`<p>` +`<img src="`+ weather[data].icon +`"></img>`+` </p>`
                      +`</div>`;
     }
}
function show(windContainer) {
    document.getElementById(windContainer).style.visibility = "visible";
}
  function hide(windContainer) {
    document.getElementById(windContainer).style.visibility = "hidden";
}
function getImagesForConditions(key) {
    return imagesForConditions[key];
}