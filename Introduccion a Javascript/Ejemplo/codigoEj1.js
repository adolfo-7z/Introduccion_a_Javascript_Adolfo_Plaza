var caja = document.getElementById("caja");
var texto = document.getElementById("texto");
caja.addEventListener("click",function(){
    texto.innerHTML = "He cambiado el texto!";
    caja.style.background = "orange";
});