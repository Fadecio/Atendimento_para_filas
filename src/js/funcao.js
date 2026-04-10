let fila = [];

function adicionarPessoa(nome) {
  fila.push(nome);
  renderizarFila();
}

adicionarPessoa();

function atenderPessoa() {
  fila.shift();
  renderizarFila();
}

atenderPessoa();

function renderizarFila() {
  let lista = document.getElementById("lista");
  lista.innerHTML = "";

  fila.forEach((pessoa, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${pessoa}`;
    lista.appendChild(li);
  });
}

renderizarFila();
