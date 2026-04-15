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

  const novaPessoa = {
    nome,
    prioridade: tipo === "prioridade",
  };

  if (novaPessoa.prioridade) {
    const index = fila.findIndex((p) => !p.prioridade);
    if (index === -1) {
      fila.push(novaPessoa);
    } else {
      fila.splice(index, 0, novaPessoa);
    }
  } else {
    fila.push(novaPessoa);
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

  if (fila.length === 0) {
    lista.innerHTML = `<li class="empty-state">Nenhum cliente na fila</li>`;
  } else {
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

  document.getElementById("contador").textContent = `Total na fila: ${fila.length}`;
}

renderizarFila();
