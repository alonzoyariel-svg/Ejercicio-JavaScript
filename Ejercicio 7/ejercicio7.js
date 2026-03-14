function esPrimo(num){

if(num < 2) return false;

for(let i=2;i<=Math.sqrt(num);i++){

if(num % i === 0){
return false;
}

}

return true;

}

function esPerfecto(num){

let suma = 0;

for(let i=1;i<num;i++){

if(num % i === 0){
suma += i;
}

}

return suma === num;

}

document.getElementById("analizar").addEventListener("click", function(){

let numero = Number(document.getElementById("numero").value);

let primo = esPrimo(numero);
let perfecto = esPerfecto(numero);

let mensaje = "";

if(primo && perfecto){
mensaje = "El número es primo y perfecto";
}
else if(primo){
mensaje = "El número es primo";
}
else if(perfecto){
mensaje = "El número es perfecto";
}
else{
mensaje = "No es primo ni perfecto";
}

document.getElementById("resultado").textContent = mensaje;

});