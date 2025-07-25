function volverAlInicio() {
            // Aquí puedes cambiar la URL según tu página de inicio
            window.location.href = '/index.html'; // o la URL de tu página principal
            // Alternativa: window.history.back(); para volver a la página anterior
        }

        document.addEventListener('DOMContentLoaded', function() {
            const form = document.querySelector('.form-register');
            const inputs = form.querySelectorAll('.controls');
            const checkbox = document.getElementById('terminos');
            const modal = document.getElementById('modal-terminos');
            const openModalLink = document.getElementById('open-modal');
            const closeModal = document.querySelector('.close');

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

            // Abrir modal de términos y condiciones
            openModalLink.addEventListener('click', function(e) {
                e.preventDefault();
                modal.style.display = 'block';
            });

            // Cerrar modal
            closeModal.addEventListener('click', function() {
                modal.style.display = 'none';
            });

            // Cerrar modal al hacer clic fuera de él
            window.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });

            // Función para mostrar/ocultar mensajes de error
            function toggleErrorMessage(input, show) {
                const errorId = 'error-' + input.id;
                const errorElement = document.getElementById(errorId);
                if (errorElement) {
                    errorElement.style.display = show ? 'block' : 'none';
                }
            }

            // Validación en tiempo real para inputs
            inputs.forEach(input => {
                input.addEventListener('input', function() {
                    if (this.checkValidity()) {
                        toggleErrorMessage(this, false);
                    }
                });

                input.addEventListener('blur', function() {
                    if (!this.checkValidity()) {
                        toggleErrorMessage(this, true);
                    }
                });
            });

            // Validación para checkbox
            checkbox.addEventListener('change', function() {
                toggleErrorMessage({id: 'terminos'}, !this.checked);
            });

            // Validación al enviar el formulario
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                let isValid = true;
                
                // Validar todos los inputs
                inputs.forEach(input => {
                    if (!input.checkValidity()) {
                        toggleErrorMessage(input, true);
                        isValid = false;
                    } else {
                        toggleErrorMessage(input, false);
                    }
                });

                // Validar checkbox
                if (!checkbox.checked) {
                    toggleErrorMessage({id: 'terminos'}, true);
                    isValid = false;
                } else {
                    toggleErrorMessage({id: 'terminos'}, false);
                }

                if (isValid) {
                    showCustomAlert('success', '¡Registro Exitoso!', 'Tu cuenta en PROPERI ha sido creada correctamente. ¡Bienvenido!');
                } else {
                    showCustomAlert('error', 'Campos Incompletos', 'Por favor, complete todos los campos correctamente antes de continuar.');
                }
            });
        });