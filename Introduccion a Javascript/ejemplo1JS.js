var btn = document.getElementById("btn");
var inputUno = document.getElementById("input1");
var inputDos = document.getElementById("input2");
var rango = document.getElementById("rango");

function rangoAleatorio(n1, n2){
    if(n1<0 || n2<0){
        return rango.innerHTML = "Ingrese números mayores o iguales a cero"
    }
    return Math.floor(Math.random() * (n2 - n1 + 1) + n1);
}

btn.addEventListener("click", function(){
    var n1 = inputUno.value;
    var n2 = inputDos.value;
    rango.innerHTML = rangoAleatorio(n1, n2);
})