mapboxgl.accessToken = 'pk.eyJ1IjoibHVhbnBzcyIsImEiOiJja2ZqMmxyamkwaHN0MnBtajRxeHc3Mm1lIn0.8b9heh2jO0KBMXrd39nCaw';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
  center: [-46.233138, -23.324837], // starting position [lng, lat]
  zoom: 14,
  scrollZoom: false // starting zoom
});
map.addControl(new mapboxgl.FullscreenControl());
const marker = new mapboxgl.Marker({
    color: "#033F88"
  })
  .setLngLat([-46.233138, -23.324837])
  .setPopup(new mapboxgl.Popup().setHTML("<h2>Patricia Festas</h2><h3>Santa Isabel - SP</h3>"))
  .addTo(map);