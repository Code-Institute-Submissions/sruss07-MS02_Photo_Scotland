// Set centre of map
var map = L.map('map').setView([56.816922, -4.18265], 5.5)

// Set map tile source
L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=k1OwPjS7pSxiUZ6xGQso', {
    maxZoom: 18,
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    tileSize: 512,
        zoomOffset: -1
}).addTo(map);

// Set bounds of map
var northWest = L.latLng(59.400, -8.430),
    southEast = L.latLng(54.550, -0.450),
    bounds = L.latLngBounds(northWest, southEast);

// Set map marker locations with popups
var marker1 = L.marker([56.083333, -4.566667], {
    title: "Loch Lomond"
}).addTo(map);
marker1.bindPopup("<h6> Loch Lomond </h6>");


var marker2 = L.marker([56.0191, -3.7553], {
    title: "The Kelpies"
}).addTo(map);
marker2.bindPopup("<h6> The Kelpies </h6>");


var marker3 = L.marker([56.403611, -5.028889], {
    title: "Kilchurn Castle"
}).addTo(map);
marker3.bindPopup("<h6> Kilchurn Castle </h6>");


var marker4 = L.marker([56.0004, -3.3886], {
    title: "The Forth Bridges"
}).addTo(map);
marker4.bindPopup("<h6> The Forth Bridges </h6>");


var marker5 = L.marker([56.946, -2.197], {
    title: "Dunnottar Castle"
}).addTo(map);
marker5.bindPopup("<h6> Dunnottar Castle </h6>");


var marker6 = L.marker([56.647303, -4.897797], {
    title: "Buchaille Etive Mor"
}).addTo(map);
marker6.bindPopup("<h6> Buchaille Etive Mor </h6>");


var marker7 = L.marker([56.876285, -5.431914], {
    title: "Glenfinnan Viaduct"
}).addTo(map);
marker7.bindPopup("<h6> Glenfinnan Viaduct </h6>");


var marker8 = L.marker([57.706667, -2.850278], {
    title: "Bow Fiddle Rock"
}).addTo(map);
marker8.bindPopup("<h6> Bow Fiddle Rock </h6>");


var marker9 = L.marker([57.274028, -5.516111], {
    title: "Eilean Donan Castle"
}).addTo(map);
marker9.bindPopup("<h6> Eilean Donan Castle </h6>");


var marker10 = L.marker([57.200, -6.200], {
    title: "The Cuillin"
}).addTo(map);
marker10.bindPopup("<h6> The Cuillin </h6>");


var marker11 = L.marker([57.80653, -5.25166], {
    title: "An Teallach"
}).addTo(map);
marker11.bindPopup("<h6> An Teallach </h6>");


var marker12 = L.marker([58.115, -5.13707], {
    title: "Suilven"
}).addTo(map);
marker12.bindPopup("<h6> Suilven </h6>");



// Array for Scotland map
    const mapLocations = [
    {
    location: "Scotland",
    center: [56.4907, 4.2026], 
    zoom: 5,
    }]

// Arrays for locations
    const photoLocations = [
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
]

