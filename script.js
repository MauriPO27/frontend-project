document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const convertForm = document.getElementById('convertForm');
    const loginMessage = document.getElementById('loginMessage');
    const registerMessage = document.getElementById('registerMessage');
    const convertedText = document.getElementById('convertedText');

    // Manejo del formulario de login
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            loginMessage.textContent = `¡Bienvenido, ${response.data.username}!`;
        } catch (error) {
            loginMessage.textContent = 'Error en el login. Intenta de nuevo.';
        }
    });

    // Manejo del formulario de registro
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const registerEmail = document.getElementById('registerEmail').value;
        const registerPassword = document.getElementById('registerPassword').value;

        try {
            const response = await axios.post('http://localhost:5000/register', { username, email: registerEmail, password: registerPassword });
            registerMessage.textContent = 'Usuario registrado con éxito.';
        } catch (error) {
            registerMessage.textContent = 'Error al registrar usuario.';
        }
    });

    // Manejo del formulario de conversión de texto
    convertForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const inputString = document.getElementById('inputString').value;

        try {
            const response = await axios.post('http://localhost:5002/uppercase', { inputString });
            convertedText.textContent = `Texto convertido: ${response.data.uppercased}`;
        } catch (error) {
            convertedText.textContent = 'Error al convertir el texto.';
        }
    });
});
