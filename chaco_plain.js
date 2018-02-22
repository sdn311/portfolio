function initialize() {
    var Chaco = new google.maps.LatLng(-23.693853,-59.489595)
    var mapOptions = {
        zoom: 5,
        center: Chaco,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };
    
    var map = new google.maps.Map(
        document.getElementById("map_canvas"),
        mapOptions);
}
