// Function to HIDE/SHOW Location info with buttons
const localityButton = document.getElementsByClassName("locality-button");
for (let i = 0; i < localityButton.length; i++) {
  localityButton[i].addEventListener("click", handleLocalitySelect);
}
function handleLocalitySelect(e) {
  const localityBtn = e.target.dataset.locality;
  const localitySelection = document.getElementsByClassName("locality-section");
  for (let i = 0; i < localitySelection.length; i++) {
    const localityID = localitySelection[i].id;
    if (localityID === localityBtn) {
      localitySelection[i].classList.remove("hidden");
    } else {
      localitySelection[i].classList.add("hidden");
    }
  }
  changeMapLocation(e.target.innerText); // click button to show map-country based on the innerText
}

// Function to RESET RESERVE info
function handleLocationReset(location) {
  const locationBtn = location;
  const reserveSelection = document.getElementsByClassName("reserve-section");
  for (let i = 0; i < reserveSelection.length; i++) {
    const reserveID = reserveSelection[i].id;
    if (reserveID === reserveBtn) {
      reserveSelection[i].classList.remove("hidden");
    } else {
      reserveSelection[i].classList.add("hidden");
    }
  }
}

//MAPS API from https://leafletjs.com/
let mapTileLayers = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", //Attribution for map tiles import
    { attribution: "Powered by Esri" }
  );
  
  /*CREDIT: 
  Tim Nelson - Showing only map tiles for Southern Africa (avoid loading world map)*/
  let map = L.map("map", {
    layers: [mapTileLayers], // variable from above
    center: [-0, 20], // central lat-lng once loaded
    zoom: 0, // smaller numbers = zoomOut // larger numbers = zoomIn
    minZoom: 2.3, // max zoomOut permitted
    maxZoom: 18, // max zoomIn permitted
    maxBounds: [
      // stops map from infinite scrolling at edges
      [38, 50], //north east boundary
      [-35, -20], //south west boundary
    ],
    maxBoundsViscosity: 0.5, // elastic bounce-back of map edges
  });
  
  L.control.scale().addTo(map); // adds scale/legend in bottom-left corner of map
    //--- END CREDIT ---
  
  // Function to change map display with button click  
  let pinMarker = {};  
  function changeMapLocation(location) {
    /* CREDIT: .find() by location in array of objects: 
  https://stackoverflow.com/a/35398031/13484385*/
    const newMapLocation = mapLocations.find(
      (name) => name.location === location
    );
    //--- END CREDIT ---
  
    // map.setView(newMapLocation.center, newMapLocation.zoom);
    map.flyTo(newMapLocation.center, newMapLocation.zoom);
    if (newMapLocation.pin) {
      map.removeLayer(pinMarker);
      pinMarker = L.marker(newMapLocation.pin)
        .addTo(map)
        .bindPopup(
          "<strong><h6>" +
            newMapLocation.location +
            "</h6></strong>" +
            "<strong>" +
            "Website:       " +
            "</strong>" +
            newMapLocation.website +
            "<strong>" +
            "<br>Latitude:      " +
            "</strong>" +
            newMapLocation.pin[0] +
            "<strong>" +
            "<br>Longitude:     " +
            "</strong>" +
            newMapLocation.pin[1]
        );
    } else {
      map.removeLayer(pinMarker);
    }
  }