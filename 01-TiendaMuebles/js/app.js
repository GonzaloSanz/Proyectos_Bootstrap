const modalImagen = document.querySelector('#modal-imagen');

if(modalImagen) {
    modalImagen.addEventListener('show.bs.modal', e => {
        const enlace = e.relatedTarget;
        const rutaImagen = enlace.getAttribute('data-bs-imagen');
    
        // Construir la imagen
        const imagen = document.createElement('img');
        imagen.src = `img/${rutaImagen}.jpg`;
        imagen.classList.add('img-fluid');
        imagen.alt = 'Imagen Galería';
    
        const contenidoModal = document.querySelector('.modal-body');
        contenidoModal.appendChild(imagen);
    });
    
    modalImagen.addEventListener('hidden.bs.modal', () => {
        const contenidoModal = document.querySelector('.modal-body');
        contenidoModal.textContent = '';
    });
}

(function () {
    'use strict'
  
    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()