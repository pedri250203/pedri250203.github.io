document.addEventListener('DOMContentLoaded', function () {
    console.log('Hello, Pedri!');

    // Función para validar el formulario de inicio de sesión
    function validarLogin() {
        var inputEmail = document.getElementById('txtusuario').value;
        var inputPassword = document.getElementById('txtpassword').value;

        // Validar el formato del correo electrónico y la contraseña
        var emailValido = validarEmail(inputEmail);
        var passwordValido = validarPassword(inputPassword);

        // Mostrar mensajes de error si es necesario
        if (!emailValido) {
            alert('Ingrese un correo electrónico válido.');
            return;
        }

        if (!passwordValido) {
            alert('La contraseña debe tener al menos 6 caracteres.');
            return;
        }

        // Si todo está bien, puedes enviar el formulario o realizar otras acciones
        alert('¡Inicio de sesión exitoso!');
    }

    // Función para validar el formato del email (puedes usar tu propia implementación)
    function validarEmail(email) {
        const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return expresionRegular.test(email);
    }

    // Función para validar el formato de la contraseña (puedes ajustar según tus requisitos)
    function validarPassword(password) {
        return password.length >= 8;
    }

    // Agrega un controlador de eventos al formulario
    document.getElementById('formulario-login').addEventListener('submit', function (event) {
        // Evita que el formulario se envíe de inmediato
        event.preventDefault();

        // Llama a la función de validación del formulario desde tu archivo JavaScript
        validarLogin();
    });
});
