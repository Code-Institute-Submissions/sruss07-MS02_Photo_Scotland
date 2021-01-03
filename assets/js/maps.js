// Function to hide and show location info with buttons
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

// Function to reset location info
function handleLocalityReset(locality) {
    const localityBtn = locality;
    const localitySelection = document.getElementsByClassName("locality-section");
    for (let i = 0; i < localitySelection.length; i++) {
    const localityID = localitySelection[i].id;
    if (localityID === localityBtn) {
        localitySelection[i].classList.remove("hidden");
    } else {
        localitySelection[i].classList.add("hidden");
    }
    }
}

let mapTileLayers = L.tileLayer(
);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYWJ6MTkwMyIsImEiOiJja2poMmE3a2Iwdm02MnhvN2p6MzNoOGVqIn0.zq4kBKs3AUwpcm6kdEQhug'
}).addTo(mymap);

// Settings for location maps
// Change map location
let pinMarker = {};  
    function changeMapLocation(location) {
    const newMapLocation = mapLocations.find(
        (name) => name.location === location
    )};

// Set map location, centre and zoom
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

// Arrays for Scotland map
    const mapLocations = [
    {
    location: "Scotland",
    center: [56.4907, 4.2026], 
    zoom: 5,
    }]

// Arrays for locations
    const mapLocations = [
    {
    location: "Loch Lomond",
    center: [56.083333, -4.566667], 
    zoom: 7.5,
    pin: [56.083333, -4.566667], 
    },
    {
    location: "The Kelpies",
    center: [56.0191, -3.7553],
    zoom: 7.5,
    pin: [56.0191, -3.7553],
    },
    {
    location: "Kilchurn Castle",
    center: [56.403611, -5.028889],
    zoom: 7.5,
    pin: [56.403611, -5.028889],
    },
    {
    location: "The Forth Bridges",
    center: [56.0004, -3.3886],
    zoom: 7.5,
    pin: [56.0004, -3.3886],
    },
    {
    location: "Dunnottar Castle",
    center: [56.946, -2.197],
    zoom: 7.5,
    pin: [56.946, -2.197],
    },
    {
    location: "Buchaille Etive Mor",
    center: [56.647303, -4.897797],
    zoom: 7.5,
    pin: [56.647303, -4.897797],
    },
    {
    location: "Glenfinnan Viaduct",
    center: [56.876285, -5.431914],
    zoom: 7.5,
    pin: [56.876285, -5.431914],
    },
    {
    location: "Bow Fiddle Rock",
    center: [57.706667, -2.850278],
    zoom: 7.5,
    pin: [57.706667, -2.850278],
    },
    {
    location: "Eilean Donan Castle",
    center: [57.274028, -5.516111],
    zoom: 7.5,
    pin: [57.274028, -5.516111],
    },
    {
    location: "The Cuillin",
    center: [57.200, -6.200],
    zoom: 7.5,
    pin: [57.200, -6.200],
    },
    {
    location: "An Teallach",
    center: [57.80653, -5.25166],
    zoom: 7.5,
    pin: [57.80653, -5.25166],
    },
    {
    location: "Suilven",
    center: [58.115, -5.13707],
    zoom: 7.5,
    pin: [58.115, -5.13707],
    },
]}
