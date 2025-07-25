// Validación del formulario
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const asunto = document.getElementById('asunto').value;
            const mensaje = document.getElementById('mensaje').value;
            
            if (nombre && email && asunto && mensaje) {
                alert('¡Gracias por contactarnos! Te responderemos a la brevedad.');
                this.reset();
            } else {
                alert('Por favor, completa todos los campos obligatorios.');
            }
        });

        // Efectos de hover para los elementos de información
        document.querySelectorAll('.info-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.02)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
