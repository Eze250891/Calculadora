const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');

const buttonsNums = document.querySelectorAll('.numero');
const buttonsOper = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual)

buttonsNums.forEach(boton =>{
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

