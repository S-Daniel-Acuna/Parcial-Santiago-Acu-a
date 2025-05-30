function validarApellido(apellido) {
    return /^[Perez]+$/.test(apellido);
}
function validarNombre(nombre) {
    return /^[Santiago]+$/.test(nombre);
}
function validarDni(dni) {
    return /^\d{8}$/.test(dni);
}
function validarFecha(fecha) {
    const fechaIngresada = new Date(fecha);
    const minFecha = new Date('2006-01-02');
    return fechaIngresada > minFecha;
}
function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let valido = true;


    document.querySelectorAll('.error').forEach(e => e.textContent = '');

    const apellido = document.getElementById('apellido').value.trim();
    const nombre = document.getElementById('nombre').value.trim();
    const dni = document.getElementById('dni').value.trim();
    const fecha = document.getElementById('fecha').value;
    const email = document.getElementById('email').value.trim();

    if (!validarApellido(apellido)) {
        document.getElementById('errorApellido').textContent = "Solo letras, sin números.";
        valido = false;
    }
    if (!validarNombre(nombre)) {
        document.getElementById('errorNombre').textContent = "Solo letras, sin números.";
        valido = false;
    }
    if (!validarDni(dni)) {
        document.getElementById('errorDni').textContent = "Debe tener 8 dígitos numéricos.";
        valido = false;
    }
    if (!validarFecha(fecha)) {
        document.getElementById('errorFecha').textContent = "Debe ser posterior a 2006.";
        valido = false;
    }
    if (!validarEmail(email)) {
        document.getElementById('errorEmail').textContent = "Formato de email inválido.";
        valido = false;
    }

    if (valido) {
        alert("Registrado exitosamente");
        this.reset();
    }
});


document.getElementById('preguntasBtn').addEventListener('click', function() {
    const respuestas = [];
    respuestas.push(prompt("¿Cuál es tu nacionalidad?") || "Sin respuesta");
    respuestas.push(prompt("¿Cuál es tu color favorito?") || "Sin respuesta");
    respuestas.push(prompt("¿Cómo se llama tu mascota?") || "Sin respuesta");

    const respuestasDiv = document.getElementById('respuestas');
    respuestasDiv.innerHTML = `
        <h3>Respuestas:</h3>
        <ul>
            <li><strong>Nacionalidad:</strong> ${respuestas[0]}</li>
            <li><strong>Color favorito:</strong> ${respuestas[1]}</li>
            <li><strong>Nombre de tu mascota:</strong> ${respuestas[2]}</li>
        </ul>
    `;
    respuestasDiv.style.display = "block";
});
