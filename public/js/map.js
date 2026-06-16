const map = new maplibregl.Map({
  container: "map",

  style: `https://maps.geoapify.com/v1/styles/osm-bright/style.json?apiKey=${apiKey}`,

  center: coordinates,

  zoom: 9,
});

map.addControl(new maplibregl.NavigationControl());

// MARKER
new maplibregl.Marker({
  color: "red",
})
  .setLngLat(coordinates)
  .addTo(map);
