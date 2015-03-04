// JavaScript Document
function init() {
console.log("init called");
  var mapProp = {
    center:new google.maps.LatLng(49.077689,-117.799186),
    zoom:15,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("map-canvas"), mapProp);
  map.set("disableDoubleClickZoom", true);
  google.maps.event.addListener(map, "dblclick", function (e) {
                //lat and lng is available in e object
                    var latLng = e.latLng;
                    console.log("Guess= lat:" + latLng.lat() + "   Lon:" + latLng.lng());
                    alert("click at lat:"+ latLng.lat() + "   lon:" + latLng.lng());
                })
}
