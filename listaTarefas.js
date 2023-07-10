const criarTarefa = (evento) => {
    evento.preventDefault();


    const lista = document.querySelector("[data-list]");


    const input = document.querySelector('[data-input-form]');
    const valor = input.value;


    const tarefa = document.createElement("li");
    tarefa.classList.add("task")

    const conteudo = `<p class="content">${valor}</p>`;





    tarefa.innerHTML = conteudo;

    lista.appendChild(tarefa);




    input.value = " ";

}

const novaTarefa = document.querySelector("[data-form-button]");
novaTarefa.addEventListener('click', criarTarefa);

const botaoConclui = () => {
    const botaoConclui = document.createElement("button");

    botaoConclui.addEventListener("click");

    return botaoConclui;

}