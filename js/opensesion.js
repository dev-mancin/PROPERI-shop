// Credenciales válidas
        const VALID_EMAIL = 'estudianteIESTP@gmail.com';
        const VALID_PASSWORD = '259278';

        // Función para volver al inicio
        function volverAlInicio() {
            window.location.href = '/html/index.html';
        }

        document.addEventListener('DOMContentLoaded', function() {
            const form = document.querySelector('.form-login');
            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');

            // Elementos de la alerta personalizada
            const customAlert = document.getElementById('custom-alert');
            const alertIcon = document.getElementById('alert-icon');
            const alertTitle = document.getElementById('alert-title');
            const alertMessage = document.getElementById('alert-message');
            const alertButton = document.getElementById('alert-button');

            // Función para mostrar alerta personalizada
            function showCustomAlert(type, title, message) {
                if (type === 'success') {
                    alertIcon.textContent = '✓';
                    alertIcon.className = 'alert-icon success';
                } else {
                    alertIcon.textContent = '⚠';
                    alertIcon.className = 'alert-icon error';
                }
                
                alertTitle.textContent = title;
                alertMessage.textContent = message;
                customAlert.style.display = 'block';
            }

            // Cerrar alerta personalizada
            alertButton.addEventListener('click', function() {
                customAlert.style.display = 'none';
            });

            // Cerrar alerta al hacer clic fuera de ella
            customAlert.addEventListener('click', function(e) {
                if (e.target === customAlert) {
                    customAlert.style.display = 'none';
                }
            });

            // Función para mostrar/ocultar mensajes de error
            function toggleErrorMessage(inputId, show) {
                const errorElement = document.getElementById('error-' + inputId);
                if (errorElement) {
                    errorElement.style.display = show ? 'block' : 'none';
                }
            }

            // Validación en tiempo real para inputs
            [emailInput, passwordInput].forEach(input => {
                input.addEventListener('input', function() {
                    if (this.checkValidity()) {
                        toggleErrorMessage(this.id, false);
                    }
                });

                input.addEventListener('blur', function() {
                    if (!this.checkValidity()) {
                        toggleErrorMessage(this.id, true);
                    }
                });
            });

            // Manejar envío del formulario
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const email = emailInput.value.trim();
                const password = passwordInput.value.trim();
                
                let hasErrors = false;

                // Validar campos vacíos y formato
                if (!emailInput.checkValidity() || email === '') {
                    toggleErrorMessage('email', true);
                    hasErrors = true;
                } else {
                    toggleErrorMessage('email', false);
                }

                if (password === '') {
                    toggleErrorMessage('password', true);
                    hasErrors = true;
                } else {
                    toggleErrorMessage('password', false);
                }

                // Si hay errores de validación básica, no continuar
                if (hasErrors) {
                    showCustomAlert('error', 'Campos Incompletos', 'Por favor, complete todos los campos correctamente.');
                    return;
                }

                // Validar credenciales
                if (email === VALID_EMAIL && password === VALID_PASSWORD) {
                    showCustomAlert('success', '¡Inicio de Sesión Exitoso!', 'Bienvenido de vuelta a PROPERI. Redirigiendo...');
                    
                    // Simular redirección después de 2 segundos
                    setTimeout(() => {
                        // Aquí puedes redirigir a la página principal o dashboard
                        console.log('Redirigiendo al dashboard...');
                        // window.location.href = 'dashboard.html';
                    }, 2000);
                } else {
                    showCustomAlert('error', 'Credenciales Incorrectas', 'El correo electrónico o la contraseña son incorrectos. Por favor, verifique sus datos.');
                }
            });

            // Manejar botón de registro
            document.querySelector('.btn-register').addEventListener('click', function() {
                // Aquí puedes redirigir a la página de registro
                console.log('Redirigiendo a registro...');
                // window.location.href = 'registro.html';
            });
        });