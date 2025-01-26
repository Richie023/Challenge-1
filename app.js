// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Crear un array para almacenar los nombres de los amigos
const amigos = [];

/**
 * Función para agregar un amigo al array y actualizar la lista en pantalla.
 */
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Eliminar espacios en blanco

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Limpiar el campo de entrada
    input.value = "";

    // Actualizar la lista de amigos en la pantalla
    actualizarListaAmigos();
}

/**
 * Función para actualizar la lista de amigos en el HTML.
 */
function actualizarListaAmigos() {
    // Obtener el elemento de la lista en el HTML
    const listaElementos = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    listaElementos.innerHTML = "";

    // Iterar sobre el arreglo y crear elementos <li> para cada amigo
    for (const amigo of amigos) {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaElementos.appendChild(li);
    }
}

/**
 * Función para sortear un amigo al azar.
 */
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("La lista de amigos está vacía. Agrega al menos un amigo para realizar el sorteo.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el HTML
    const resultadoElementos = document.getElementById("resultado");
    resultadoElementos.innerHTML = `<li>Amigo secreto: <strong>${amigoSorteado}</strong></li>`;
}
