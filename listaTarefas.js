const criarTarefa = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-input-form]');
    const valor = input.value;
    console.log ( valor );
    input.value = " ";

}

const novaTarefa = document.querySelector("[data-form-button]");
novaTarefa.addEventListener('click', criarTarefa);

