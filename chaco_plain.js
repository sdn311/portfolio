function initialize() {
    var Chaco = new google.maps.LatLng(-23.693853,-59.489595)
    var mapOptions = {
        zoom: 8,
        center: Chaco,
        mapTypeId: google.maps.MaptypeId.HYBRID
    };
    var map = new google.maps.Map(
        document.getElementById("map_canvas"),
        mapOptions);
}
