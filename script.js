
let url = "https://www.prevision-meteo.ch/services/json/";
let request = fetch("https://www.prevision-meteo.ch/services/json/toulon")
const restTemp = document.querySelector("#resTemp");
const restIcon = document.querySelector("#resIcon");
const restCity = document.querySelector("#resCity");
const restDate = document.querySelector("#resDate");
const restWindDir = document.querySelector("#windDirection");
const restWindSpeed = document.querySelector("#windSpeed");
const title = document.querySelector("#title");
const restWeather = document.querySelector("#weather-result");
let restHourly = document.querySelector("#hourlyData");
const $body = document.querySelector("#body");
let condition ="";

        request.then(function(response){
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
        
function updateMeteo(){
    let cityWanted = document.getElementById("searchInput").value;
    fetch(url + cityWanted)
    .then(response => response.json())
    .then(function(response) {
        updatePage(response);
    })
    .catch(function () {
        alert('Erreur');
    });
}

const updateBackground = function() {
    switch (condition) {
        case 'Ensoleillé':
            $body.style.backgroundImage = 'url(https://observatorcl.info/wp-content/uploads/2020/01/ANM.jpg)';  
            break;
        case 'Ciel voilé':
            $body.style.backgroundImage = 'url(https://images7.alphacoders.com/680/thumb-1920-680835.jpg)';
            break;
        case 'Faiblement nuageux':
            $body.style.backgroundImage = 'url(https://images5.alphacoders.com/431/thumb-1920-431971.jpg)';
            break;
        case 'Eclaircies':
            $body.style.backgroundImage = 'url(https://wallpaperaccess.com/full/1167968.jpg)';
            break;
        case 'Stratus se dissipant':
            $body.style.backgroundImage = 'url(https://images7.alphacoders.com/680/thumb-1920-680835.jpg)';
            break;
        case 'Fortement nuageux':
            $body.style.backgroundImage = 'url(https://images4.alphacoders.com/102/thumb-1920-1028191.jpg)';
            break;
        case 'Développement nuageux':
            $body.style.backgroundImage = 'url(https://images4.alphacoders.com/913/thumb-1920-913354.jpg)';
            break;
        case 'Stratus':
            $body.style.backgroundImage = 'url(https://images5.alphacoders.com/431/thumb-1920-431971.jpg)';
            break;
        case 'Nuit claire':
            $body.style.backgroundImage = 'url(https://images3.alphacoders.com/824/thumb-1920-824826.jpg)';
            break;
        case 'Nuit bien dégagée':
            $body.style.backgroundImage = 'url(https://images5.alphacoders.com/511/thumb-1920-511222.jpg)';
            break;
        case 'Nuit légèrement voilée':
            $body.style.backgroundImage = 'url(https://images3.alphacoders.com/161/thumb-1920-161369.jpg)';
            break;
        case 'Nuit claire et stratus':
            $body.style.backgroundImage = 'url(https://images8.alphacoders.com/676/thumb-1920-676644.jpg)';
            break;
        case 'Nuit nuageuse':
            $body.style.backgroundImage = 'url(https://images7.alphacoders.com/937/thumb-1920-937486.jpg)';
            break;
        case 'Nuit avec développement nuageux':
            $body.style.backgroundImage = 'url(https://images5.alphacoders.com/992/thumb-1920-992126.jpg)';
            break;
        case 'Averses de pluie faible':
            $body.style.backgroundImage = 'url(https://images8.alphacoders.com/714/thumb-1920-714894.jpg)';
            break;
        case 'Pluie faible':
            $body.style.backgroundImage = 'url(https://images3.alphacoders.com/986/thumb-1920-986363.jpg)';
            break;
        case 'Averses de pluie modérée':
            $body.style.backgroundImage = 'url(https://images5.alphacoders.com/312/thumb-1920-312372.jpg)';
            break;
        case 'Averses de pluie forte':
            $body.style.backgroundImage = 'url(https://images.alphacoders.com/108/thumb-1920-1084974.jpg)';
            break;
        case 'Couvert avec averses':
            $body.style.backgroundImage = 'url(https://images2.alphacoders.com/783/thumb-1920-783245.jpg)';
            break;
        case 'Pluie forte':
            $body.style.backgroundImage = 'url(https://images2.alphacoders.com/597/thumb-1920-597905.jpg)';
            break;
        case 'Pluie modérée':
            $body.style.backgroundImage = 'url(https://images7.alphacoders.com/103/thumb-1920-1036817.jpg)';
            break;
        case 'Faiblement orageux':
            $body.style.backgroundImage = 'url(https://images6.alphacoders.com/854/thumb-1920-854198.jpg)';
            break;
        case 'Orage modéré':
            $body.style.backgroundImage = 'url(https://images.alphacoders.com/453/thumb-1920-453238.jpg)';
            break;
        case 'Fortement orageux':
            $body.style.backgroundImage = 'url(https://images2.alphacoders.com/596/thumb-1920-596907.jpg)';
            break;
        case 'Nuit faiblement orageuse':
            $body.style.backgroundImage = 'url(https://images8.alphacoders.com/697/thumb-1920-697542.jpg)';
            break;
        case 'Averses de neige faible':
            $body.style.backgroundImage = 'url(https://images5.alphacoders.com/341/thumb-1920-341015.jpg)';
            break;
        case 'Neige faible':
            $body.style.backgroundImage = 'url(https://images3.alphacoders.com/116/thumb-1920-116827.jpg)';
            break;
        case 'Neige modérée':
            $body.style.backgroundImage = 'url(https://images7.alphacoders.com/876/thumb-1920-876256.jpg)';
            break;
        case 'Neige forte':
            $body.style.backgroundImage = 'url(https://images.alphacoders.com/106/thumb-1920-106423.jpg)';
            break;
        case 'Pluie et neige mêlée faible':
            $body.style.backgroundImage = 'url(https://images.alphacoders.com/106/thumb-1920-106423.jpg)';
            break;
        case 'Pluie et neige mêlée modérée':
            $body.style.backgroundImage = 'url(https://images6.alphacoders.com/899/thumb-1920-899414.jpg)';
            break;
        case 'Pluie et neige mêlée forte':
            $body.style.backgroundImage = 'url(https://images6.alphacoders.com/793/thumb-1920-793091.jpg)';
            break;
        case 'Nuit avec averses de neige faible':
            $body.style.backgroundImage = 'url(https://images2.alphacoders.com/814/thumb-1920-814106.jpg)';
            break;
        case 'Brouillard':
            $body.style.backgroundImage = 'url(https://images3.alphacoders.com/929/thumb-1920-929605.jpg)';
            break;
        default:
            $body.style.backgroundImage = 'url(https://images.alphacoders.com/143/thumb-1920-143073.jpg)';  
            break;
    }
}

function updatePage(météo){
    restTemp.textContent = météo.current_condition.tmp + "°C";
    restCity.textContent = météo.city_info.name;
    restDate.textContent = "Nous sommes le " + météo.fcst_day_0.day_long +" "+ météo.current_condition.date;
    restIcon.setAttribute("src",météo.current_condition.icon_big);
    restWeather.textContent = météo.current_condition.condition;
    restWindDir.textContent = "Direction du vent: " + météo.current_condition.wnd_dir;
    restWindSpeed.textContent = "La vitesse du vent est de " + météo.current_condition.wnd_spd + " km/h";
    
    let restHourly = Object.entries(météo.fcst_day_0.hourly_data);
    let html ="";
    for(i = 0 ; i < restHourly.length ; i++){
        const [hour, data,] = restHourly[i];
        html += `<div class="dataHourly">`+ `<p>`+ hour + " "+`</p>`+  data.TMP2m + "°" +`<p>` +
                `<img src="`+ data.ICON +`"></img>`+` </p>` +`</div>`;
        hourlyData.innerHTML = html;
    }
    dayOne = document.querySelector("#day");
    dayOne.innerHTML = "";
     for(i = 1 ; i < 5 ; i++){
         const data = "fcst_day_"+[i];
         dayOne.innerHTML += `<div class="dayByDay col-3">`+ `<p>`+météo[data].date + " " +`</p>` + `<p>` + météo[data].tmin + "°" + `/` +
                            météo[data].tmax + "°" + `<p>` +  météo[data].day_long +`<p>` +`<img src="`+ météo[data].icon +`"></img>`+` </p>`
                            +`</div>`;
     }
     condition = météo.current_condition.condition;
     updateBackground() 
}
function show(windContainer) {
    document.getElementById(windContainer).style.visibility = "visible";
  }
  function hide(windContainer) {
    document.getElementById(windContainer).style.visibility = "hidden";
}

function updateTitle(){
    title = city_info.name;
}