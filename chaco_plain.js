function initialize() {
    var classroom = new google.maps.LatLng(-23.693853,-59.489595)
    var mapOptions = {
      zoom: 8,
      center: classroom,
      mapTypeId:google.maps.MaptypeId.SATELLITE
  };
      var map = new google.maps.Map(
      document.getElementById("map_canvas"),
      mapOptions);
}
