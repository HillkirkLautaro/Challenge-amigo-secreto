let amigos = [] // este array contendrá los nombres de usuario

// codigo para crear una funcion que permite un nombre y añadirlo al array
function agregarAmigo() {
    // 1. Capturar el valor del input
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // 2. Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // corta la ejecución si está vacío
    }

    // 3. Añadir al array
    amigos.push(nombre);

    // 4. Mostrar el nuevo listado en pantalla
    mostrarLista();

    // 5. Limpiar el campo de entrada
    input.value = "";
};


function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpia la lista antes de volver a renderizar

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
};

function sortearAmigo() {
    // 1. Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;
    }

    // 2. Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3. Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // 4. Mostrar el resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Tu amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
