const map = new maplibregl.Map({
  container: "map",

  style: `https://maps.geoapify.com/v1/styles/osm-bright/style.json?apiKey=${apiKey}`,

  center: listing.geometry.coordinates,

  zoom: 9,
});

map.addControl(new maplibregl.NavigationControl());

// MARKER
new maplibregl.Marker({
  color: "red",
})
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new maplibregl.Popup({
      offset: 25,
    }).setHTML(`
      <h4>${listing.title}</h4>
      <p>Exact location will be provided after booking</p>
  `),
  )
  .addTo(map);
