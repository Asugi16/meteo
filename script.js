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
const $cityWanted = document.querySelector("#searchInput");

        $request.then(function(response){
            return response.json();
        })
        .then(function(askWeather){
            updatePage(askWeather);
        })
        
const input = document.getElementById("searchInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("searchBtn").click();
  }
});
        
function updateWeather($cityWanted){
    let $url = "https://www.prevision-meteo.ch/services/json/";
    fetch($url + $cityWanted.value)
    .then(response => response.json())
    .then(function(response) {
        updatePage(response);
    })
    .catch(function () {
        alert('Erreur');
    });
}

const imagesForConditions = {
        "ensoleille":"https://observatorcl.info/wp-content/uploads/2020/01/ANM.jpg",
        'ciel-voile':'https://images7.alphacoders.com/680/thumb-1920-680835.jpg',
        'faiblement-nuageux':'https://images5.alphacoders.com/431/thumb-1920-431971.jpg',
        'eclaircies':'https://wallpaperaccess.com/full/1167968.jpg',
        'stratus-se-dissipant':'https://images7.alphacoders.com/680/thumb-1920-680835.jpg',
        'fortement-nuageux':'https://images4.alphacoders.com/102/thumb-1920-1028191.jpg',
        'developpement-nuageux':'https://images4.alphacoders.com/913/thumb-1920-913354.jpg',
        'stratus':'https://images5.alphacoders.com/431/thumb-1920-431971.jpg',
        'nuit-claire':'https://images3.alphacoders.com/824/thumb-1920-824826.jpg',
        'nuit-bien-degagee':'https://images5.alphacoders.com/511/thumb-1920-511222.jpg',
        'nuit-legerement-voilee':'https://images3.alphacoders.com/161/thumb-1920-161369.jpg',
        'nuit-claire-et-stratus':'https://images8.alphacoders.com/676/thumb-1920-676644.jpg',
        'nuit-nuageuse':'https://images7.alphacoders.com/937/thumb-1920-937486.jpg',
        'nuit-avec-developpement-nuageux':'https://images5.alphacoders.com/992/thumb-1920-992126.jpg',
        'averses-de-pluie-faible':'https://images8.alphacoders.com/714/thumb-1920-714894.jpg',
        'pluie-faible':'https://images3.alphacoders.com/986/thumb-1920-986363.jpg',
        'averses-de-pluie-moderee':'https://images5.alphacoders.com/312/thumb-1920-312372.jpg',
        'averses-de-pluie-forte':'https://images.alphacoders.com/108/thumb-1920-1084974.jpg',
        'couvert-avec-averses':'https://images2.alphacoders.com/783/thumb-1920-783245.jpg',
        'pluie-forte':'https://images2.alphacoders.com/597/thumb-1920-597905.jpg',
        'pluie-moderee':'https://images7.alphacoders.com/103/thumb-1920-1036817.jpg',
        'faiblement-orageux':'https://images6.alphacoders.com/854/thumb-1920-854198.jpg',
        'orage-modere':'https://images.alphacoders.com/453/thumb-1920-453238.jpg',
        'fortement-orageux':'https://images2.alphacoders.com/596/thumb-1920-596907.jpg',
        'nuit-faiblement-orageuse':'https://images8.alphacoders.com/697/thumb-1920-697542.jpg',
        'averses-de-neige-faible':'https://images5.alphacoders.com/341/thumb-1920-341015.jpg',
        'neige-faible':'https://images3.alphacoders.com/116/thumb-1920-116827.jpg',
        'neige-moderee':'https://images7.alphacoders.com/876/thumb-1920-876256.jpg',
        'neige-forte':'https://images.alphacoders.com/106/thumb-1920-106423.jpg',
        'pluie-et-neige-melee-faible':'https://images.alphacoders.com/106/thumb-1920-106423.jpg',
        'pluie-et-neige-melee-moderee':'https://images6.alphacoders.com/899/thumb-1920-899414.jpg',
        'pluie-et-neige-melee-forte':'https://images6.alphacoders.com/793/thumb-1920-793091.jpg',
        'nuit-avec-averses-de-neige-faible':'https://images2.alphacoders.com/814/thumb-1920-814106.jpg',
        'brouillard':'https://images3.alphacoders.com/929/thumb-1920-929605.jpg',
    }

function updatePage(weather){
    $temp.textContent = weather.current_condition.tmp + "°C";
    $city.textContent = weather.city_info.name;
    $date.textContent = "Nous sommes le " + weather.fcst_day_0.day_long +" "+ weather.current_condition.date;
    $icon.setAttribute("src",weather.current_condition.icon_big);
    $weather.textContent = weather.current_condition.condition;
    $windDir.textContent = "Direction du vent: " + weather.current_condition.wnd_dir;
    $windSpeed.textContent = "La vitesse du vent est de " + weather.current_condition.wnd_spd + " km/h";

    let result = getImagesForConditions(weather.current_condition.condition_key);
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