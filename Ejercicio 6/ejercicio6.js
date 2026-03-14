function esPerfecto(num){

let suma = 0;

for(let i = 1; i < num; i++){

if(num % i === 0){
suma += i;
}

}

return suma === num;

}

document.getElementById("verificar").addEventListener("click", function(){

let numero = Number(document.getElementById("numero").value);

let resultado = esPerfecto(numero);

document.getElementById("resultado").textContent = resultado;

});