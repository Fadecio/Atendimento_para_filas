import { fila } from "./state.js";

export function renderizarFila() {
  const lista = document.getElementById("lista");
  const contador = document.getElementById("contador");

  lista.innerHTML = "";

  contador.textContent = `Clientes na fila: ${fila.length}`;

  if (fila.length === 0) {
    lista.innerHTML = `<li class="empty-state">Nenhum cliente na fila</li>`;
    return;
  }

  fila.forEach((pessoa, index) => {
    const li = document.createElement("li");

    li.innerHTML = `<span>${index + 1}. ${pessoa.nome}</span> 
      ${pessoa.prioridade ? '<span class="tag">Prioridade</span>' : ""}`;

    if (pessoa.prioridade) {
      li.classList.add("prioridade");
    } else {
      li.classList.add("normal");
    }

    lista.appendChild(li);
  });
}
