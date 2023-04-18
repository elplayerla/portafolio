// Campo Nombre - Obtener valores
const inputNombre = document.getElementById('section-contacto__container-campos__nombre__input');
const labelNombre = document.querySelector('label[for="section-contacto__container-campos__nombre__label"]');
const indicadorNombre = document.getElementById('section-contacto__container-campos__nombre__indicador');

// Obtener estilos originales del input
const originalLabelSize = labelNombre.style.fontSize;
const originalLabelColor = labelNombre.style.color;
const originalLabelPadding = labelNombre.style.padding;
const originalIndicadorBgColor = indicadorNombre.style.backgroundColor;
const originalIndicadorHeight = indicadorNombre.style.height;

// Campo Nombre- Label click input
labelNombre.addEventListener('click', () => {
    inputNombre.focus();
});

// Campo Nombre - Evento focus estilos
inputNombre.addEventListener('focus', () => {
    if (inputNombre.value === '') {
        labelNombre.style.color = '#2A7AE4';
        labelNombre.style.fontSize = '15px';
        labelNombre.style.paddingTop = '10px';
        labelNombre.style.transition = '1s';
    }
    labelNombre.style.color = '#2A7AE4';
    indicadorNombre.style.backgroundColor = '#2A7AE4';
    indicadorNombre.style.height = '5px';
});

// Campo Nombre - Restaurar estilos originales cuando se de-selecciona el input
inputNombre.addEventListener('blur', () => {
    if (inputNombre.value === '') {
        labelNombre.style.fontSize = originalLabelSize;
        labelNombre.style.paddingTop = originalLabelPadding;
        labelNombre.style.transition = '1s';
    }
    labelNombre.style.color = originalLabelColor;
    indicadorNombre.style.backgroundColor = originalIndicadorBgColor;
    indicadorNombre.style.height = originalIndicadorHeight;
});

// Campo Nombre - Validacion de entradas
inputNombre.addEventListener('blur', () => {
    const nombreValue = inputNombre.value.trim();
    const errorContainer = document.getElementById('error-nombre');
  
    // Validar si el campo está vacío
    if (!nombreValue) {
      errorContainer.innerText = 'El nombre es requerido.';
      return;
    }
  
    // Validar si el campo excede los 50 caracteres
    if (nombreValue.length > 50) {
      errorContainer.innerText = 'No puede tener más de 50 caracteres.';
      return;
    }
  
    // Si todas las validaciones pasaron, vaciar el mensaje de error
    errorContainer.innerText = '';
});




// Campo E-mail - Obtener valores
const inputEmail = document.getElementById('section-contacto__container-campos__email__input');
const labelEmail = document.querySelector('label[for="section-contacto__container-campos__email__label"]');
const indicadorEmail = document.getElementById('section-contacto__container-campos__email__indicador');

// Campo E-mail - Label click input
labelEmail.addEventListener('click', () => {
    inputEmail.focus();
});

// Campo E-mail - Evento focus estilos
inputEmail.addEventListener('focus', () => {
    if (inputEmail.value === '') {
        labelEmail.style.color = '#2A7AE4';
        labelEmail.style.fontSize = '15px';
        labelEmail.style.paddingTop = '10px';
        labelEmail.style.transition = '1s';
    }
    labelEmail.style.color = '#2A7AE4';
    indicadorEmail.style.backgroundColor = '#2A7AE4';
    indicadorEmail.style.height = '5px';
});

// Campo E-mail - Restaurar estilos originales cuando se de-selecciona el input
inputEmail.addEventListener('blur', () => {
    if (inputEmail.value === '') {
        labelEmail.style.fontSize = originalLabelSize;
        labelEmail.style.paddingTop = originalLabelPadding;
        labelEmail.style.transition = '1s';
    }
    labelEmail.style.color = originalLabelColor;
    indicadorEmail.style.backgroundColor = originalIndicadorBgColor;
    indicadorEmail.style.height = originalIndicadorHeight;
});

// Campo E-mail - Validacion de entradas
inputEmail.addEventListener('blur', () => {
    const emailValue = inputEmail.value.trim();
    const errorContainer = document.getElementById('error-email');
  
    // Validar si el campo está vacío
    if (!emailValue) {
      errorContainer.innerText = 'El E-Mail es requerido.';
      return;
    }

    // Validar formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
      errorContainer.innerText = 'Debe ingresar un correo electrónico válido.';
      emailValido = false;
      return;
    }
  
    // Si todas las validaciones pasaron, vaciar el mensaje de error
    errorContainer.innerText = '';
    emailValido = true;
});




// Campo Asunto - Obtener valores
const inputAsunto = document.getElementById('section-contacto__container-campos__asunto__input');
const labelAsunto = document.querySelector('label[for="section-contacto__container-campos__asunto__label"]');
const indicadorAsunto = document.getElementById('section-contacto__container-campos__asunto__indicador');


// Campo Asunto - Label click input
labelAsunto.addEventListener('click', () => {
    inputAsunto.focus();
});

// Campo Asunto - Evento focus estilos
inputAsunto.addEventListener('focus', () => {
    if (inputAsunto.value === '') {
        labelAsunto.style.color = '#2A7AE4';
        labelAsunto.style.fontSize = '15px';
        labelAsunto.style.paddingTop = '10px';
        labelAsunto.style.transition = '1s';
    }
    labelAsunto.style.color = '#2A7AE4';
    indicadorAsunto.style.backgroundColor = '#2A7AE4';
    indicadorAsunto.style.height = '5px';
});

// Campo Asunto - Restaurar estilos originales cuando se de-selecciona el input
inputAsunto.addEventListener('blur', () => {
    if (inputAsunto.value === '') {
        labelAsunto.style.fontSize = originalLabelSize;
        labelAsunto.style.paddingTop = originalLabelPadding;
        labelAsunto.style.transition = '1s';
    }
    labelAsunto.style.color = originalLabelColor;
    indicadorAsunto.style.backgroundColor = originalIndicadorBgColor;
    indicadorAsunto.style.height = originalIndicadorHeight;
});

// Campo Asunto - Validacion de entradas
inputAsunto.addEventListener('blur', () => {
    const nombreValue = inputAsunto.value.trim();
    const errorContainer = document.getElementById('error-asunto');
  
    // Validar si el campo está vacío
    if (!nombreValue) {
      errorContainer.innerText = 'El asunto es requerido.';
      return;
    }
  
    // Validar si el campo excede los 50 caracteres
    if (nombreValue.length > 50) {
      errorContainer.innerText = 'No puede tener más de 50 caracteres.';
      return;
    }
  
    // Si todas las validaciones pasaron, vaciar el mensaje de error
    errorContainer.innerText = '';
});




// Campo Mensaje - Obtener valores
const inputMensaje = document.getElementById('section-contacto__container-campos__mensaje__textarea');
const labelMensaje = document.querySelector('label[for="section-contacto__container-campos__mensaje__label"]');
const indicadorMensaje = document.getElementById('section-contacto__container-campos__mensaje__indicador');

// Campo Mensaje - Label click input
labelMensaje.addEventListener('click', () => {
    inputMensaje.focus();
});

// Campo Mensaje - Evento focus estilos
inputMensaje.addEventListener('focus', () => {
    if (inputMensaje.value === '') {
        labelMensaje.style.color = '#2A7AE4';
        labelMensaje.style.fontSize = '15px';
        labelMensaje.style.paddingTop = '10px';
        labelMensaje.style.transition = '1s';
    }
    labelMensaje.style.color = '#2A7AE4';
    indicadorMensaje.style.backgroundColor = '#2A7AE4';
    indicadorMensaje.style.height = '5px';
});

// Campo Mensaje - Restaurar estilos originales cuando se de-selecciona el input
inputMensaje.addEventListener('blur', () => {
    if (inputMensaje.value === '') {
        labelMensaje.style.fontSize = originalLabelSize;
        labelMensaje.style.paddingTop = originalLabelPadding;
        labelMensaje.style.transition = '1s';
    }
    labelMensaje.style.color = originalLabelColor;
    indicadorMensaje.style.backgroundColor = originalIndicadorBgColor;
    indicadorMensaje.style.height = originalIndicadorHeight;
});
  
// Campo Mensaje - Evento scroll para ocultar el labelMensaje
inputMensaje.addEventListener('scroll', () => {
    if (inputMensaje.scrollHeight > inputMensaje.clientHeight) {
        labelMensaje.style.display = 'none';
    } else {
        labelMensaje.style.display = 'block';
    }
});

// Campo Mensaje - Validacion de entradas
inputMensaje.addEventListener('blur', () => {
    const nombreValue = inputMensaje.value.trim();
    const errorContainer = document.getElementById('error-mensaje');
  
    // Validar si el campo está vacío
    if (!nombreValue) {
      errorContainer.innerText = 'El mensaje es requerido.';
      return;
    }
  
    // Validar si el campo excede los 50 caracteres
    if (nombreValue.length > 300) {
      errorContainer.innerText = 'No puede tener más de 300 caracteres.';
      return;
    }
  
    // Si todas las validaciones pasaron, vaciar el mensaje de error
    errorContainer.innerText = '';
});

// Botón Enviar - Activar solo cuando todos los campos están llenos
const form = document.getElementById('section-contacto__form');
const enviarBtn = document.querySelector('.section-contacto__container-campos__boton');
let emailValido = false;

form.addEventListener('input', () => {
    const inputs = form.querySelectorAll('input, textarea');
    const emptyInputs = [...inputs].filter(input => !input.value.trim());
    
    if (emptyInputs.length === 0 && emailValido) {
      enviarBtn.disabled = false;
      enviarBtn.classList.remove("section-contacto__container-campos__boton__deshabilitado");
      if (!enviarBtn.classList.contains("section-contacto__container-campos__boton__habilitado")) {
        enviarBtn.classList.add("section-contacto__container-campos__boton__habilitado");
      }
    } else {
      enviarBtn.disabled = true;
      enviarBtn.classList.add("section-contacto__container-campos__boton__deshabilitado");
      enviarBtn.classList.remove("section-contacto__container-campos__boton__habilitado");
    }
});
