function initMap() {
    // The location of Uluru
    var uluru = { lat: 39.933365, lng: 32.859741 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
      document.getElementById('map'), { zoom: 4, center: uluru });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: uluru, map: map });
  }