let numeroMagico = Math.floor(Math.random() * 10) + 1;
let intentos = 0;
const adivinar = document.getElementById("Casilla");
 const input = document.getElementById("Numero");
    input.addEventListener("input", function() {
    valor= Number(this.value);
    if (valor > 10){
        this.value = 10;
    }
    if (valor < 1){
        this.value = 1;
    }
});
addEventListener ("submit", function(event){
    event.preventDefault();
    

    let imput = document.getElementById("Numero");
    let valor = imput.value;
    let mensaje = document.getElementById("Mensaje");

    if (valor === "") {
        alert ("Por favor, ingresa un número.");
        return;
    }

    valor = Number(valor);
    if (valor > 10) {
        alert ("el numero debe ser menor o igual a 10.");
        imput.value = "";
        return;
    }
    if (valor < 1 || valor > 10) {
        alert ("el numero debe ser mayor o igual a 1.");
        imput.value = "";
        return;
    }

    intentos++;

    if (valor < numeroMagico) {
        mensaje.textContent = "El numero secreto es mayor. Intenta de nuevo.";
    } else if (valor > numeroMagico) {
        mensaje.textContent = "El numero secreto es menor. Intenta de nuevo.";
    } else {
        mensaje.textContent = `¡Felicidades! Adivinaste el número en ${intentos} intentos.`;
    }
    imput.value = "";
});

function reinicio() {
    numeroMagico = Math.floor(Math.random() * 10) + 1;
    intentos = 0;
    document.getElementById("Mensaje").textContent = "";

}
