var btn = document.getElementById("btn");
var resultado = document.getElementById("resultado")
var inputUno = document.getElementById("input-uno");
var inputDos = document.getElementById("input-dos");

function suma(n1, n2){
        return parseInt(n1) + parseInt(n2);
}

function resta(n1, n2){
    return parseInt(n1) - parseInt(n2);
}

function multiplicar(n1, n2){
    return parseInt(n1) * parseInt(n2);
}

function dividir(n1, n2){
    if(n2==0){
        return resultado.innerHTML = "Resultado Indefinido, división por cero.";
    }
    return parseInt(n1) / parseInt(n2);
}

btn.addEventListener("click",function(){
    var n1 = inputUno.value;
    var n2 = inputDos.value;
    resultado.innerHTML = suma(n1,n2);
});

btn2.addEventListener("click",function(){
    var n1 = inputUno.value;
    var n2 = inputDos.value; 
    resultado.innerHTML = resta(n1,n2);
});

btn3.addEventListener("click",function(){
    var n1 = inputUno.value;
    var n2 = inputDos.value; 
    resultado.innerHTML = multiplicar(n1,n2);
});

btn4.addEventListener("click",function(){
    var n1 = inputUno.value;
    var n2 = inputDos.value; 
    resultado.innerHTML = dividir(n1,n2);
});