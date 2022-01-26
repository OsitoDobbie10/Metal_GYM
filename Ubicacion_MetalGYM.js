const boton = document.querySelector('.menu-btn');

//registrar evento click
boton.addEventListener('click',()=>{
    document.querySelector('.header-menu').classList.toggle('show'); //toggle nos permite poner como quitar la clase 
}); 
ScrollReveal().reveal('.encabezado',{delay:3000});
ScrollReveal().reveal('.formBlock',{delay:3000});
ScrollReveal().reveal('.map',{delay:3000});
//visualizacion del mapa de fondo 
var mapoptions = {center:[14.06543,-87.17918],zoom: 18,zoomControl: true};
var setMaxBounds = [14.0758, -87.1826, 14.1075, -87.1418];
var mapa = L.map('map',mapoptions,L.CRS.EPSG4326,setMaxBounds); 
//agregar mapa base de mapbox
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 23,
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoib3NpdG9kb2JiaWUiLCJhIjoiY2t2NXlycG5xM3R2ZDJ3cDY2azA3dmxlciJ9.8Q9I-QOLNZ0mZL5pt_JnfQ'  
}).addTo(mapa);
//new L.Control.Zoom({ position:'bottomright'}).addTo(mapa);

//consulta de mapa 
//funcion para ejecutar mapa del metal gym 1 
function Metalgym1(){
    //crear la vista del mapa 
    let mapoptions1 = {
        center: [14.06576, -87.18231],
        zoom:20,
        zoomControl:true,
        maxZoom:23};
    //limites boundingboxs de la vista del mapa
    let setMaxBounds1 = [14.0758, -87.1826, 14.1075, -87.1418]; 
    //crear nuesttro mapa 
    let mapa1 = L.map('map',mapoptions1,setMaxBounds1);
    //agregar escala del mapa
    new L.control.scale({imperial:false}).addTo(mapa1); 
//agregar mnapas bases para el mapa 
//google maps
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 23,
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoib3NpdG9kb2JiaWUiLCJhIjoiY2t2NXlycG5xM3R2ZDJ3cDY2azA3dmxlciJ9.8Q9I-QOLNZ0mZL5pt_JnfQ'  
}).addTo(mapa1);

 //agregar un titulo al mapa 
let info1 = L.control();
// Crear un div con una clase info este div se agregara al mapa
info1.onAdd = function(mapa1){
    this._div = L.DomUtil.create('div','infomap1');
    this.update();
    return this._div;}; 
    
    info1.update = function (mapa1){
        this._div.innerHTML = '<h4>Mapa de ubicacion Metal Gym #1</h4><ul> <li>Ubicacion: Primera etapa Col. Kennedy</li><li>Lote: 013</li><li>Manzana: 0125</li><li>Clave:20-0125-013</li><li>Mensualidad: 380 lps.</li></ul> <br><img src="LOGOMAPA.png" alt="Mapa"><br><img src="Metal1.png" alt="Mapa"><br><br>   <p>Fuente:Catastro AMDC.</p>'}; 
    info1.addTo(mapa1); 

    function popup(feature,layer){
        if(feature.properties && feature.properties.Name){
            layer.bindPopup(`<strong>Colonia: </strong> ${feature.properties.nom_col} <br/>
            <strong>Sector: </strong> ${feature.properties.sector} <br/>
            <strong>Manzana: </strong> ${feature.properties.manzana} <br/> 
            <strong>Lote: </strong> ${feature.properties.lote} <br/> 
            <strong>Clave: </strong> ${feature.properties.clave_cat} <br/> 
            <strong>Nombre: </strong> ${feature.properties.Name}`  );
        }
    } 

    //crear capas con sus  elementos 
    let style1 = {
        fillColor:'blue' ,
        weight: 2,
        opacity: 1,
        color: 'black',
        fillOpacity: 0.5};

    let metalgym1 = L.geoJson(MetalGym1,{
        style:style1,
        onEachFeature: popup}).addTo(mapa1); 

    //poner elementos sobre el mapa 
    var carto_light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {attribution: '©OpenStreetMap, ©CartoDB',subdomains: 'abcd',maxZoom: 24});

    //L.control.layers(basemap,capas,{position: "topleft"}).addTo(mapa1); 
    let minimap = new L.Control.MiniMap(carto_light,
        {
            toggleDisplay: true,
            minimized: false,
            position: "bottomleft"
        }).addTo(mapa1);  
    
        
    const legend7 = new L.control.Legend({ 
        position: "bottomleft",
        collapsed: false,
        symbolWidth: 24,
        opacity:0,
        column:1,
        title:"Simbologia",
        legends: [
            {label: "Metal GYM #1", 
            type: "image",
            url: "Header.PNG",
            weight: 2,
            layers: metalgym1,
            inactive: false,}]}).addTo(mapa1);  
    }
 
function Metalgym3(){
    //crear la vista del mapa 
    let mapoptions1 = {
        center: [ 14.06543,-87.17918],
        zoom:20,
        zoomControl:true,
        maxZoom:23};
    //limites boundingboxs de la vista del mapa
    let setMaxBounds1 = [14.0758, -87.1826, 14.1075, -87.1418]; 
    //crear nuesttro mapa 
    let mapa2 = L.map('map',mapoptions1,setMaxBounds1);
    //agregar escala del mapa
    new L.control.scale({imperial:false}).addTo(mapa2); 
//agregar mnapas bases para el mapa 
//google maps
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 23,
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoib3NpdG9kb2JiaWUiLCJhIjoiY2t2NXlycG5xM3R2ZDJ3cDY2azA3dmxlciJ9.8Q9I-QOLNZ0mZL5pt_JnfQ'  
}).addTo(mapa2);


 //agregar un titulo al mapa 
let info1 = L.control();
// Crear un div con una clase info este div se agregara al mapa
info1.onAdd = function(mapa2){
    this._div = L.DomUtil.create('div','infomap2');
    this.update();
    return this._div;}; 
    
    info1.update = function (mapa2){
        this._div.innerHTML = '<h4>Mapa de ubicacion Metal Gym #2</h4><ul> <li>Ubicacion: Primera etapa Col. Kennedy</li><li>Lote: 002</li><li>Manzana: 0127</li><li>Clave:20-0127-002</li><li>Mensualidad: 500 lps.</li></ul> <br><img src="LOGOMAPA.png" alt="Mapa"><br><p>Fuente:Catastro AMDC.</p>'}; 
    info1.addTo(mapa2); 

    function popup2(feature,layer){
        if(feature.properties && feature.properties.Name){
            layer.bindPopup(`<strong>Colonia: </strong> ${feature.properties.nom_col} <br/>
            <strong>Sector: </strong> ${feature.properties.sector} <br/>
            <strong>Manzana: </strong> ${feature.properties.manzana} <br/> 
            <strong>Lote: </strong> ${feature.properties.lote} <br/> 
            <strong>Clave: </strong> ${feature.properties.clave_cat} <br/> 
            <strong>Nombre: </strong> ${feature.properties.Name}`  );
        }
    } 

    //crear capas con sus  elementos 
    let style2 = {
        fillColor:'green' ,
        weight: 2,
        opacity: 1,
        color: 'black',
        fillOpacity: 0.5};

    let metalgym2 = L.geoJson(Metalgym2,{
        style:style2,
        onEachFeature: popup2}).addTo(mapa2); 

    //let capas = {'Metal GYM #2': metalgym2};

    //poner elementos sobre el mapa 
    //L.control.layers(capas,{position: "topleft"}).addTo(mapa2); 
    var carto_light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {attribution: '©OpenStreetMap, ©CartoDB',subdomains: 'abcd',maxZoom: 24});
    let minimap2 = new L.Control.MiniMap(carto_light,
        {
            toggleDisplay: true,
            minimized: false,
            position: "bottomleft"
        }).addTo(mapa2);  
    
        
    const legend4 = new L.control.Legend({ 
        position: "bottomleft",
        collapsed: false,
        symbolWidth: 24,
        opacity:0,
        column:1,
        title:"Simbologia",
        legends: [
            {label: "Metal GYM #2", 
            type: "image",
            url: "Header.PNG",
            weight: 2,
            layers: metalgym2,
            inactive: false,}]}).addTo(mapa2);

}

function submitForm(event) {
    event.preventDefault();
    // delete current map layer
    mapa.remove();
    // getting form data
    start = document.getElementById("Metal1").value;
    end = document.getElementById("Metal2").value;
    if(start == 'Metal Gym #1'){
        Metalgym1();
        document.getElementById('form').reset();}
    if(end == 'Metal Gym #2'){
            Metalgym3();
            document.getElementById('form').reset();}}
// asign the form to form variable
const form = document.getElementById('form');

// call the submitForm() function when submitting the form
form.addEventListener('submit', submitForm);