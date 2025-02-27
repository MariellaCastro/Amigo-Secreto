// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let lista = document.getElementById("listaAmigos");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    amigos.push(nombre);
    input.value = "";
    lista.innerHTML = "";

    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}
function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    if (amigos.length < 2) {
        resultado.innerHTML = "No hay los suficiente amigos para sortear.";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}
