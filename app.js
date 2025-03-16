const amigos = [];
const inputNombre = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

document.getElementById('btnAñadir').addEventListener('click', agregarAmigo);
document.getElementById('btnSortear').addEventListener('click', sortear);
document.getElementById('btnReiniciar').addEventListener('click', reiniciar);

function agregarAmigo() {
    const nombre = inputNombre.value.trim();
    if (nombre && !amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarLista();
        inputNombre.value = '';
    } else {
        alert('Ingresa un nombre válido o que no esté repetido.');
    }
}

function actualizarLista() {
    listaAmigos.innerHTML = amigos.map((nombre, index) => `
        <li class="list-item">
            ${nombre}
            <button class="delete-btn" onclick="eliminarAmigo(${index})">❌</button>
        </li>
    `).join('');
}

function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

function sortear() {
    if (amigos.length === 0) {
        alert('Agrega al menos un nombre antes de sortear.');
        return;
    }
    const elegido = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.innerHTML = `<li>${elegido}</li>`;
}

function reiniciar() {
    amigos.length = 0;
    listaAmigos.innerHTML = '';
    resultado.innerHTML = '';
    inputNombre.value = '';
}