var mapoptions = {center:[14.06543,-87.17918],zoom: 18,zoomControl: false};
var setMaxBounds = [14.0758, -87.1826, 14.1075, -87.1418];
var mapa = L.map('mapa2',mapoptions,L.CRS.EPSG4326,setMaxBounds); 
//agregar mapa base de mapbox
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 19,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoib3NpdG9kb2JiaWUiLCJhIjoiY2t2NXlycG5xM3R2ZDJ3cDY2azA3dmxlciJ9.8Q9I-QOLNZ0mZL5pt_JnfQ'
}).addTo(mapa);  
new L.Control.Zoom({ position:'bottomright'}).addTo(mapa);
function popuop(){
    return "<b>Col.Kennedy segunda entrada segundo piso centro comercial paseo Kennedy.</b><br>Metal Gym #2."}

var Metalgym1_icon = L.icon({
        iconUrl: 'press-de-banca.png',
        //shadowUrl: 'leaf-shadow.png',
        iconSize:     [40, 40], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-5, -86] // point from which the popup should open relative to the iconAnchor
    });
//agregar marcador 
L.marker([ 14.06543,-87.17918],{icon: Metalgym1_icon}).addTo(mapa).bindPopup(popuop());

let info2 = L.control();
// Crear un div con una clase info este div se agregara al mapa
info2.onAdd = function(mapa){
    this._div = L.DomUtil.create('div','infomap1');
    this.update();
    return this._div;}; 
    
    info2.update = function (mapa){
        this._div.innerHTML = '<h4>ubicacion Metal Gym #2</h4><ul><li>Mensualidad: 500 lps.</li></ul><br><img src="LOGOMAPA.png" alt="Mapa"><br><p>Fuente:Propia.</p>'}; 
    info2.addTo(mapa); 