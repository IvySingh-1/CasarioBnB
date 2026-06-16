const map = new maplibregl.Map({
  container: "map",

  // Geoapify style
  style:
    `https://maps.geoapify.com/v1/styles/osm-bright/style.json?apiKey=${apiKey}`,

  center: [77.2090, 28.6139], // [lng, lat]
  zoom: 9
});

// optional controls
map.addControl(new maplibregl.NavigationControl());
