/*function validarFormulario() {
    var campoA = document.getElementById("campoA").value;
    var campoB = document.getElementById("campoB").value;

    if (campoB > campoA) {
        document.getElementById("mensagem").innerHTML = "Formulário válido!";
    } else {
        document.getElementById("mensagem").innerHTML = "Formulário inválido! O número B deve ser maior que o número A.";
    }
}*/

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão de submissão do formulário

    var campoA = document.getElementById('campoA').value;
    var campoB = document.getElementById('campoB').value;

    if (campoB > campoA) {
        alert('Formulário válido! B é maior que A.');
    } else {
        alert('Formulário inválido! B não é maior que A.');
    }
});


// .addEventListner:
//O tipo de evento que você deseja ouvir (por exemplo, 'click', 'mouseover', 'keydown', etc.).
//A função que deve ser chamada quando o evento é acionado.
//Um terceiro parâmetro opcional, que é um valor booleano que especifica se o evento deve ser capturado ou não. Este parâmetro é opcional e padrão para false.