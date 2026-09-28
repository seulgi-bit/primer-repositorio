document.addEventListener('DOMContentLoaded', () => {

  // 1. Menú Hamburguesa para celulares
  const btnMenu = document.getElementById('btnMenu');
  const navMenu = document.getElementById('navMenu');

  btnMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Cerrar menú al presionar una opción
  document.querySelectorAll('.nav a').forEach(enlace => {
    enlace.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  // 2. Animación de barras de progreso al hacer scroll
  const barras = document.querySelectorAll('.barra-progreso');

  window.addEventListener('scroll', () => {
    const seccion = document.getElementById('habilidades');
    const posicion = seccion.getBoundingClientRect().top;

    if (posicion < window.innerHeight - 80) {
      barras.forEach(barra => {
        const porcentaje = barra.getAttribute('data-porcentaje');
        barra.style.width = porcentaje;
      });
    }
  });

  // 3. Validación de Formulario en tiempo real
  const form = document.getElementById('formularioContacto');
  const inputNombre = document.getElementById('nombre');
  const inputEmail = document.getElementById('email');
  const inputMensaje = document.getElementById('mensaje');

  const errorNombre = document.getElementById('errorNombre');
  const errorEmail = document.getElementById('errorEmail');
  const errorMensaje = document.getElementById('errorMensaje');
  const mensajeExito = document.getElementById('mensajeExito');

  function validar() {
    let correcto = true;

    // Validación Nombre
    if (inputNombre.value.trim() === '') {
      errorNombre.textContent = 'Por favor escribe tu nombre ♡';
      correcto = false;
    } else {
      errorNombre.textContent = '';
    }

    // Validación Email
    if (!inputEmail.value.includes('@') || !inputEmail.value.includes('.')) {
      errorEmail.textContent = 'Ingresa un correo válido (ej: nombre@correo.com)';
      correcto = false;
    } else {
      errorEmail.textContent = '';
    }

    // Validación Mensaje
    if (inputMensaje.value.trim().length < 5) {
      errorMensaje.textContent = 'Escribe un mensaje de al menos 5 caracteres';
      correcto = false;
    } else {
      errorMensaje.textContent = '';
    }

    return correcto;
  }

  // Comprobar mientras la persona escribe
  inputNombre.addEventListener('input', validar);
  inputEmail.addEventListener('input', validar);
  inputMensaje.addEventListener('input', validar);

  // Al presionar enviar
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validar()) {
      mensajeExito.textContent = '¡Mensaje enviado con éxito! Nos vemos pronto ✨';
      form.reset();

      setTimeout(() => {
        mensajeExito.textContent = '';
      }, 4000);
    }
  });

});