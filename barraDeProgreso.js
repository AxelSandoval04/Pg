// Obtener la barra de progreso
var progressBar = document.getElementById("myBar");

// Contador de preguntas respondidas
var questionsAnswered = 0;

// Función para actualizar la barra de progreso
function updateProgressBar() {
  questionsAnswered++;

  // Aumentar la barra de progreso en 10% cada 10 preguntas
  if (questionsAnswered % 10 === 0) {
    var progress = (questionsAnswered / 10) * 10;
    progressBar.style.width = progress + "%";
    progressBar.innerHTML = progress + "% completado";
  }
}

// Simular respuestas a preguntas (ejemplo)
// Aquí deberías llamar a updateProgressBar() cada vez que se responda una pregunta
// Este es solo un ejemplo para demostrar cómo se actualizaría la barra
for (var i = 1; i <= 50; i++) {
  // Simular respuesta a una pregunta
  // Aquí iría tu lógica real de contestar preguntas
  updateProgressBar();
}
