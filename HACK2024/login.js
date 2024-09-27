// Verifica si ya existe un usuario autenticado
const isLoggedIn = JSON.parse(localStorage.getItem('login_success'));
if (isLoggedIn) {
    window.location.href = 'index.html'; // Si ya ha iniciado sesión, redirige al index
}

const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    const Users = JSON.parse(localStorage.getItem('users')) || [];

    // Busca un usuario que coincida con las credenciales
    const validUser = Users.find(user => user.email === email && user.password === password);

    if (!validUser) {
        return alert('Usuario y/o contraseña incorrectos!');
    }

    alert(`Bienvenido ${validUser.name}`);
    localStorage.setItem('login_success', JSON.stringify(validUser));
    window.location.href = 'index.html'; // Redirige al index si el inicio de sesión es exitoso
});
