let stage = 0;

function growTree(step) {
    const tree = document.getElementById('tree');
    
    // Actualizar la imagen del árbol dependiendo de la etapa
    if (step === 1) {
        tree.src = 'seed.png'; // Imagen de semilla
        tree.className = '';
    } else if (step === 2) {
        tree.src = 'small-tree.png'; // Imagen de árbol pequeño
        tree.className = 'growing';
    } else if (step === 3) {
        tree.src = 'mature-tree.png'; // Imagen de árbol maduro
        tree.className = 'mature';
    } else if (step === 4) {
        tree.src = 'full-tree.png'; // Imagen de árbol completo con frutos
        tree.className = 'full-grown';
    }
    
    // Lógica para simular el crecimiento paso a paso
    stage = step;
}