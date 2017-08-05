// Create a map variable
var map;
// Function to initialize the map within the map div
function initMap() {
    var styles = [
          {
            featureType: 'water',
            stylers: [
              { color: '#add8e6' }
            ]
          },{
            featureType: 'administrative',
            elementType: 'labels.text.stroke',
            stylers: [
              { color: '#ffffff' },
              { weight: 6 }
            ]
          },{
            featureType: 'administrative',
            elementType: 'labels.text.fill',
            stylers: [
              { color: '#e85113' }
            ]
          },{
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [
              { color: '#efe9e4' },
              { lightness: -40 }
            ]
          },{
            featureType: 'transit.station',
            stylers: [
              { weight: 9 },
              { hue: '#e85113' }
            ]
          },{
            featureType: 'road.highway',
            elementType: 'labels.icon',
            stylers: [
              { visibility: 'off' }
            ]
          },{
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [
              { lightness: 100 }
            ]
          },{
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [
              { lightness: -100 }
            ]
          },{
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [
              { visibility: 'on' },
              { color: '#f0e4d3' }
            ]
          },{
            featureType: 'road.highway',
            elementType: 'geometry.fill',
            stylers: [
              { color: '#efe9e4' },
              { lightness: -25 }
            ]
          }
        ];

        map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: 40.74135, lng: -73.99802},
         zoom: 14,
         styles: styles,
         mapTypeControl: false

    });
    // Create a single latLng literal object.
    var singleLatLng = {lat: 40.74135, lng: -73.99802};
    // TODO: Create a single marker appearing on initialize -
    // Create it with the position of the singleLatLng,
    // on the map, and give it your own title!
    var marker = new google.maps.Marker({
        position: singleLatLng,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'My First Marker!'
    });
    
    // TODO: create a single infowindow, with your own content.
    // It must appear on the marker
    var largeInfowindow = new google.maps.InfoWindow({
        content: 'Where\'s Waldo?'
    });
    
    // TODO: create an EVENT LISTENER so that the infowindow opens when
    // the marker is clicked!
    marker.addListener('click', function() {
        // populateInfoWindow(this, largeInfowindow);
        largeInfowindow.open(map, marker);
    });
    
    // Style the markers a bit. This will be our listing marker icon.
    var defaultIcon = makeMarkerIcon('0091ff');

    // Create a "highlighted location" marker color for when the user
    // mouses over the marker.
    var highlightedIcon = makeMarkerIcon('FFFF24');
        
    // Two event listeners - one for mouseover, one for mouseout,
    // to change the colors back and forth.
    marker.addListener('mouseover', function() {
        this.setIcon(highlightedIcon);
    });
    marker.addListener('mouseout', function() {
        this.setIcon(defaultIcon);
  });
  
    // This function takes in a COLOR, and then creates a new marker
    // icon of that color. The icon will be 21 px wide by 34 high, have an origin
    // of 0, 0 and be anchored at 10, 34).
    function makeMarkerIcon(markerColor) {
    var markerImage = new google.maps.MarkerImage(
      'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
      '|40|_|%E2%80%A2',
      new google.maps.Size(21, 34),
      new google.maps.Point(0, 0),
      new google.maps.Point(10, 34),
      new google.maps.Size(21,34));
    return markerImage;
    }
}
