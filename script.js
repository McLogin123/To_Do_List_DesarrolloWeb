const BotonAgregar = document.getElementById('agregar');
const NotaInput = document.getElementById('lista-input');
const NotasContainer = document.getElementById('lista-tareas');
const NotaLista = document.getElementsByClassName('nota');

BotonAgregar.addEventListener('click', () => {
    const NotaText = NotaInput.value;
    if (NotaText.trim() === '') {
        alert("Nota vacia, por favor ingrese una tarea");
    } else {
        const NotaDiv = document.createElement('button');
        NotaDiv.className = 'nota';
        NotaDiv.textContent = NotaText;
        NotasContainer.appendChild(NotaDiv)
        NotaInput.value = '';
    }
})