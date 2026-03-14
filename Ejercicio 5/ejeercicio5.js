function esPrimo(num){

if(num < 2) return false;

for(let i = 2; i <= Math.sqrt(num); i++){

if(num % i === 0){
return false;
}

}

return true;

}

document.getElementById("generar").addEventListener("click", function(){

let primos = [];

for(let i=1;i<=1000;i++){

if(esPrimo(i)){
primos.push(i);
}

}

document.getElementById("resultado").textContent = primos.join(", ");

});