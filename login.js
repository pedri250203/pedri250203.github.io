document.addEventListener('DOMContentLoaded', function () {
    console.log('Hello, Pedri!');

  
    function validarLogin() {
        var inputEmail = document.getElementById('txtusuario').value;
        var inputPassword = document.getElementById('txtpassword').value;

       
        var emailValido = validarEmail(inputEmail);
        var passwordValido = validarPassword(inputPassword);

     
        if (!emailValido) {
            alert('Ingrese un correo electrónico válido.');
            return;
        }

        if (!passwordValido) {
            alert('La contraseña debe tener al menos 6 caracteres.');
            return;
        }

       
        alert('¡Inicio de sesión exitoso!');
    }

   
    function validarEmail(email) {
        const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return expresionRegular.test(email);
    }

   
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
