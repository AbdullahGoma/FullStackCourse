
function getLocation() {
  console.log("Get Location");

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;

      document.getElementById("lat").innerHTML = lat;
      document.getElementById("long").innerHTML = long;
    }, function(error) {
      console.log(error);
    })
  } else {
    console.log("Your browser does not support geolocation");
  }
}
