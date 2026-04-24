import { fila } from "./state.js";
import { removerPessoa } from "./queue.js";

export function renderizarFila(onAtualizarTela, onRemoverPessoa) {
  const lista = document.getElementById("lista");
  const contador = document.getElementById("contador");

  lista.innerHTML = "";

  contador.textContent = `Clientes na fila: ${fila.length}`;

  if (fila.length === 0) {
  lista.innerHTML = `
    <li class="empty-state">
      <strong>Nenhum cliente na fila</strong>
      <span>Adicione um cliente para iniciar o atendimento.</span>
    </li>
  `;
  return;
}

  fila.forEach((pessoa, index) => {
    const li = document.createElement("li");

    if (pessoa.prioridade) {
      li.classList.add("prioridade");
    } else {
      li.classList.add("normal");
    }

    const info = document.createElement("span");
    info.textContent = `${index + 1}. ${pessoa.nome}`;

    const actions = document.createElement("div");
    actions.classList.add("item-actions");

    if (pessoa.prioridade) {
      const tag = document.createElement("span");
      tag.classList.add("tag");
      tag.textContent = "Prioridade";
      actions.appendChild(tag);
    }

    const btnRemover = document.createElement("button");
    btnRemover.classList.add("btn-remover");
    btnRemover.textContent = "✕";
    btnRemover.setAttribute("type", "button");
    btnRemover.setAttribute("aria-label", `Remover ${pessoa.nome} da fila`);
    btnRemover.title = `Remover ${pessoa.nome}`;

    btnRemover.addEventListener("click", () => {
      const nomeRemovido = pessoa.nome;
      removerPessoa(index);

      if (onRemoverPessoa) {
        onRemoverPessoa(nomeRemovido);
        return;
      }
      onAtualizarTela();
    });

    actions.appendChild(btnRemover);

    li.appendChild(info);
    li.appendChild(actions);
    lista.appendChild(li);
  });
}
