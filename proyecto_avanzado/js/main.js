var map;
var infowindow;
var latitud=19.3228313;
var longitud=-99.1887661;
var local;
//var marcadores[ ];
//var contador=0;

function initMap( ){
  local={
    lat: latitud,
    lng: longitud
  };
  map = new google.maps.Map(document.getElementById('map'), {
    center: local,
    zoom: 16
  });
  infowindow = new google.maps.InfoWindow( );
}

$(document).on("ready", function( ){
  navigator.geolocation.getCurrentPosition(almacenar, error);
  $("#buscar").on("click", buscaLugares)
});

function almacenar(pos){
  var coordenadas=pos.coords;
  local={
    lat: coordenadas.latitude,
    lng: coordenadas.longitude
  };
  map.panTo(local);
}

function error(error){
  alert("Coordenadas por default");
}

function buscaLugares( ){
  var keyword=$("#keyword").val( );
  var request={
    location: local,
    radius: 500,
    types: [keyword]
  };
  var service=new google.maps.places.PlacesService(map);
  //for(var i=0; i<contador; i++){
    //marcadores[i].setMap(null);
  //}
  //contador=0;
  service.nearbySearch(request, callback);
}

function callback(results, status){
  if(status==google.maps.places.PlacesServiceStatus.OK){
    for(var i=0; i<results.length; i++){
      createMarker(results[i]);
    }
  }
}

function createMarker(place){
  var placeLoc=place.geometry.location;
  var marker=new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function( ){
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
  //marcadores[contador]=marker;
  //contador++;
}