const botaoConclui = () => {
    const botaoConclui = document.createElement("button");
    botaoConclui.classList.add("check-button");
    botaoConclui.innerText = "Concluir"
    botaoConclui.addEventListener("click", conluirTarefa);
    return botaoConclui;
}

const conluirTarefa = (evento)=> {
    const botaoConclui = evento.target;
    const tarefaCompleta = botaoConclui.parentElement;
    tarefaCompleta.classList.toggle("done");
}

export default botaoConclui;