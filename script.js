document.addEventListener('DOMContentLoaded', () => {
  console.log("¡JavaScript cargado y listo!");
});
const btnMenu = document.getElementById('btnMenu');
const navMenu = document.getElementById('navMenu');
btnMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
}
);
const enlacesNav = navMenu.querySelectorAll('a');
enlacesNav.forEach(enlace => {
  enlace.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});
const seccionHabilidades = document.getElementById('habilidades');
const barrasProgreso = document.querySelectorAll('.barra-progreso');
let animacionEjecutada = false;
window.addEventListener('scroll', () => {
  const posicionSeccion = seccionHabilidades.getBoundingClientRect().top;
  const tamanoPantalla = window.innerHeight;
  if (posicionSeccion < tamanoPantalla * 0.75 && !animacionEjecutada) {
    barrasProgreso.forEach(barra => {
      const porcentaje = barra.getAttribute('data-porcentaje');
      barra.style.width = porcentaje;
    });
    animacionEjecutada = true;
  }
});
const form = document.getElementById('formularioContacto');
const inputNombre = document.getElementById('nombre');
const inputEmail = document.getElementById('email');
const inputMensaje = document.getElementById('mensaje');

const errorNombre = document.getElementById('errorNombre');
const errorEmail = document.getElementById('errorEmail');
const errorMensaje = document.getElementById('errorMensaje');
const mensajeExito = document.getElementById('mensajeExito');
function esEmailValido(correo) {
  const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return patronEmail.test(correo);
}
form.addEventListener('submit', (evento) => {
  evento.preventDefault();
  let hayErrores = false;
  errorNombre.textContent = '';
  errorEmail.textContent = '';
  errorMensaje.textContent = '';
  mensajeExito.textContent = '';
  if (inputNombre.value.trim() === '') {
    errorNombre.textContent = 'Por favor, ingresa tu nombre completo.';
    hayErrores = true;
  }

  if (inputEmail.value.trim() === '') {
    errorEmail.textContent = 'El correo electrónico es obligatorio.';
    hayErrores = true;
  } else if (!esEmailValido(inputEmail.value.trim())) {
    errorEmail.textContent = 'Por favor, ingresa un correo electrónico válido.';
    hayErrores = true;
  }

  if (inputMensaje.value.trim().length < 5) {
    errorMensaje.textContent = 'El mensaje debe tener al menos 5 caracteres.';
    hayErrores = true;
  }

  if (!hayErrores) {
    mensajeExito.textContent = '¡Gracias por tu mensaje! Me pondré en contacto contigo muy pronto. ♡';
    form.reset();
  }
});
