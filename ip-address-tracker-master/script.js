// Mapping API

var mymap = L.map('mapid').setView([26.41, 82.54], 5);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1Ijoib25seWtpbmdrZCIsImEiOiJja3MzbnZyZmExeHk0MnZtcmMwdjB6b3V5In0.YGSFJvrGINqywHieF1IXBQ'
}).addTo(mymap);


var IP_ADD = document.getElementById("ip-address");
var LOC = document.getElementById("location");
var TIMEZONE = document.getElementById("timezone");
var ISP = document.getElementById("ISP");


function searchIP() {
  window.scrollBy(0, 300);
  var IP = document.getElementById("search");
  var ip = IP.value;
  var url = "https://geo.ipify.org/api/v1?apiKey=at_q49o2j7ZW4KSwREIkNEiEgz6sqrZ6&ipAddress=" + ip;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      IP_ADD.innerText = data.ip;
      LOC.innerText = data.location.city + " " + data.location.region;
      TIMEZONE.innerText = data.location.timezone;
      ISP.innerText = data.isp;
      var marker = L.marker([data.location.lat, data.location.lng]).addTo(mymap);
      marker.bindPopup("<b>" + data.location.lat + "<br>" + data.location.lng + "</b>").openPopup();
    });
}

