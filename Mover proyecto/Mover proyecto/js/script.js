// Organized JS for functionality: handle custom form submission (e.g., open modal and process form)
// No unnecessary functions; comments for clarity

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get form element
    const customForm = document.getElementById('customForm');
    
    // Add event listener for form submission (simulates sending pedido; in real project, connect to backend)
    customForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Collect form data
        const producto = document.getElementById('producto').value;
        const especificaciones = document.getElementById('especificaciones').value;
        const cantidad = document.getElementById('cantidad').value;
        const email = document.getElementById('email').value;
        
        // Simple validation (already handled by HTML required, but extra check)
        if (producto && especificaciones && cantidad > 0 && email) {
            alert('¡Pedido personalizado enviado! Nos pondremos en contacto vía ' + email + ' para detalles sobre ' + producto + ' (' + especificaciones + ', Cantidad: ' + cantidad + ').');
            // Reset form
            customForm.reset();
            // Close modal
            const modal = bootstrap.Modal.getInstance(document.getElementById('customOrderModal'));
            modal.hide();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
    
    // Example: Toggle visibility for catalog sections (bonus functionality, but kept minimal)
    // Not used here to avoid unnecessary code, but expandable if needed
});