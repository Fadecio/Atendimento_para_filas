let fila = JSON.parse(localStorage.getItem("fila")) || [];

function salvar() {
  localStorage.setItem("fila", JSON.stringify(fila));
}

function adicionar(tipo = "normal") {
  const input = document.getElementById("nome");
  const nome = input.value.trim();

  if (!nome) {
    alert("Por favor, digite um nome!");
    return;
  }

  if (tipo === "prioridade") {
    fila.unshift({ nome, prioridade: true });
  } else {
    fila.push({ nome, prioridade: false });
  }

  input.value = "";
  salvar();
  renderizarFila();
}

function atenderPessoa() {
  if (fila.length === 0) {
    alert("A fila está vazia!");
    return;
  }

  fila.shift();
  salvar();
  renderizarFila();
}

function limpar() {
  fila = [];
  salvar();
  renderizarFila();
}

function renderizarFila() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  fila.forEach((pessoa, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${index + 1}. ${pessoa.nome}</span> 
    ${pessoa.prioridade ? '<span class="tag">Prioridade</span>' : ""}`;

    if (pessoa.prioridade) {
      li.classList.add("prioridade");
    }

    lista.appendChild(li);
  });
}

renderizarFila();
