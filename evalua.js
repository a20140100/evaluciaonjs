alert("Bienvenido a la pagina Javascript");
var nom= prompt("Ingrese su Nombre y Apellido");
var res1 = prompt ("¿En qué departamento se encuentra el lago Titicaca?\nA: Tacna\nB: Puno\nC: Cusco"); 
if(res1=="B"){
    res1 = 25
}else{
    res1 = 0
}
var res2 = prompt("¿Desde qué parte del Perú se pueden avistar ballenas jorobadas?\nA: Lima e Ica\nB: Arequipa y Tacna\nC: Piura y Tumbes");
if(res2 =="C"){
    res2 = 25 
}else{
    res2 = 0 
}
var res3 = prompt("Plato típico de la Selva peruana\nA: Tacacho con Cecina\nB: Arroz con Pollo\nC: Lomo Saltado");
if(res3 = "A"){
    res3 = 25
}else{
    res3 = 0
}

var total = res1 + res2 + res3

document.write("<h1> Evalua</h1>");
document.write("Respuestar <br>");
document.write(nom + "tus respuestas son <br>" );
document.write(total + "% respuestas correctas" );
document.write("Lo has hecho bien");
document.write("Vuelve a intentarlo")