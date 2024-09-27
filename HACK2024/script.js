const preguntas = [
  '¿Cuál es su objetivo financiero?',
  '¿Cuánto dinero necesita?',
  '¿Cuál es su plazo de pago?',
  '¿Cuál es su tipo de interés?',
  '¿Cuál es su método de pago?',
  '¿Cuál es su frecuencia de pago?',
  '¿Cuál es su monto de pago?',
  '¿Cuál es su tipo de seguro?',
  '¿Cuál es su cobertura de seguro?',
  '¿Cuál es su límite de crédito?',
];

let preguntaActual = 0;

function mostrarPregunta() {
  const pregunta = preguntas[preguntaActual];
  console.log(pregunta);
  // Mostrar la pregunta en una ventana emergente o en un elemento HTML
  // ...
  preguntaActual++;
  agregarNodoHijo(); // Agregar un nuevo nodo hijo
}

function agregarNodoHijo() {
  const nodoActual = document.querySelector('#arbol li:hover');
  const nuevoNodo = document.createElement('li');
  nuevoNodo.innerHTML = `<span>${preguntas[preguntaActual]}</span><ul></ul>`;
  nodoActual.appendChild(nuevoNodo);
  crearRama(nodoActual); // Crear una nueva rama
}

function crearRama(nodo) {
  const rama = document.createElement('div');
  rama.className = 'branch';
  nodo.appendChild(rama);
  crearHoja(nodo); // Crear una nueva hoja
}

function crearHoja(nodo) {
  const hoja = document.createElement('div');
  hoja.className = 'leaf';
  nodo.appendChild(hoja);
}

// Mostrar la primera pregunta
mostrarPregunta();

// Agregar eventos de clic a los nodos del árbol
document.addEventListener('click', (event) => {
  if (event.target.tagName === 'SPAN') {
    mostrarPregunta();
  }
});