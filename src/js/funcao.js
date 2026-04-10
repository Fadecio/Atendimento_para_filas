let fila = [];

function adicionarComInput() {
  const nomeInput = document.getElementById("nome").value;
  if (nomeInput.trim() === "") {
    alert("Por favor, digite um nome!");
    return;
  }
  adicionarPessoa(nomeInput);
  document.getElementById("nome").value = "";
}

function adicionarPessoa(nome) {
  fila.push(nome);
  renderizarFila();
}

function adicionarPrioritarioComInput() {
  const nomeInput = document.getElementById("nome").value;
  if (nomeInput.trim() === "") {
    alert("Por favor, digite um nome!");
    return;
  }
  adicionarPessoaPrioritaria(nomeInput);
  document.getElementById("nome").value = "";
}

function adicionarPessoaPrioritaria(nome) {
  fila.unshift(nome);
  renderizarFila();
}

function atenderPessoa() {
  fila.shift();
  renderizarFila();
}

function limpar() {
  fila = [];
  renderizarFila();
}

function renderizarFila() {
  let lista = document.getElementById("lista");
  lista.innerHTML = "";

  fila.forEach((pessoa, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${pessoa}`;
    lista.appendChild(li);
  });
}
