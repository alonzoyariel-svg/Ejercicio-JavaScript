let nombre = "Alonzo";
let edad = 22;
let ciudad = "Santo Domingo";

document.getElementById("mostrar").addEventListener("click", function(){

let mensaje = "Hola, mi nombre es " + nombre + ", tengo " + edad + " años y vivo en " + ciudad;

document.getElementById("resultado").textContent = mensaje;

});