const BotonAgregar = document.getElementById('agregar');
const NotaInput = document.getElementById('lista-input');
const NotasContainer = document.getElementById('lista-tareas');

BotonAgregar.addEventListener('click', () => {
    const NotaText = NotaInput.value;
    if (NotaText.trim() === '') {
        alert("Nota vacia, por favor ingrese una tarea");
    } else {
        const NotaDiv = document.createElement('div');
        NotaDiv.className = 'note';
        NotaDiv.textContent = NotaText;
        NotasContainer.appendChild(NotaDiv)
        NotaInput.value = '';
    }
})