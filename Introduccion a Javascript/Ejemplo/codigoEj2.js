var btn = document.getElementById("btn");
var resultado = document.getElementById("resultado")
var inputUno = document.getElementById("input-uno");
var inputDos = document.getElementById("input-dos");

btn.addEventListener("click",function(){
    var n1 = inputUno.value;
    var n2 = inputDos.value;
    resultado.innerHTML = suma(n1,n2);
});

function suma(n1, n2){
    return parseInt(n1) + parseInt(n2);
}