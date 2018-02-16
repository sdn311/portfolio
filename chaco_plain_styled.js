function initialize() {
    var Chaco = new google.maps.LatLng(-23.693853,-59.489595)
    var mapOptions = {
        zoom: 5,
        center: Chaco,
        mapTypeId: google.maps.MapTypeId.SATELLITE
        styles: [
          {
            "elementType": "geometry",
            "stylers": [
              { "color": "#212121"
          }
    var map = new google.maps.Map(
        document.getElementById("map_canvas"),
        myOptions);
}
