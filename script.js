document.addEventListener('DOMContentLoaded', () => {

  // 1. Menú Hamburguesa
  const btnMenu = document.getElementById('btnMenu');
  const navMenu = document.getElementById('navMenu');

  btnMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Cerrar menú al hacer clic en un enlace
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('active'));
  });

  // 2. Animar barras de progreso al hacer scroll
  const progresses = document.querySelectorAll('.progress');
  window.addEventListener('scroll', () => {
    const skillsSection = document.getElementById('skills');
    const position = skillsSection.getBoundingClientRect().top;

    if (position < window.innerHeight - 50) {
      progresses.forEach(bar => {
        bar.style.width = bar.getAttribute('data-width');
      });
    }
  });

  // 3. Validación de Formulario en tiempo real
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const msgSuccess = document.getElementById('msgSuccess');

  const setError = (input, message) => {
    input.nextElementSibling.textContent = message;
  };

  const validate = () => {
    let valid = true;

    if (!nameInput.value.trim()) {
      setError(nameInput, 'Ingresa tu nombre.');
      valid = false;
    } else { setError(nameInput, ''); }

    if (!emailInput.value.includes('@')) {
      setError(emailInput, 'Ingresa un correo válido.');
      valid = false;
    } else { setError(emailInput, ''); }

    if (messageInput.value.trim().length < 5) {
      setError(messageInput, 'El mensaje debe ser más largo.');
      valid = false;
    } else { setError(messageInput, ''); }

    return valid;
  };

  // Validar mientras el usuario escribe
  form.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', validate);
  });

  // Evento Submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validate()) {
      msgSuccess.textContent = '¡Mensaje enviado con éxito!';
      form.reset();
      setTimeout(() => msgSuccess.textContent = '', 4000);
    }
  });

});