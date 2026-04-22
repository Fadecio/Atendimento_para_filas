import { adicionarPessoa, atenderPessoa, limparFila } from "./queue.js";
import { renderizarFila } from "./ui.js";
import { fila } from "./state.js";

const input = document.getElementById("nome");
const btnAdicionar = document.getElementById("btn-adicionar");
const btnPrioridade = document.getElementById("btn-prioridade");
const btnAtender = document.getElementById("btn-atender");
const btnLimpar = document.getElementById("btn-limpar");
const toast = document.getElementById("toast");

function mostrarToast(mensagem, tipo = "error") {
  toast.textContent = mensagem;
  toast.className = `toast show ${tipo}`;

  setTimeout(() => {
    toast.className = "toast";
  }, 3000);
}

function obterNome() {
  const nome = input.value.trim();

  if (!nome) {
    mostrarToast("Por favor, insira um nome válido.");
    return null;
  }

  input.value = "";
  return nome;
}

function atualizarBotoes() {
  const vazio = fila.length === 0;
  btnAtender.disabled = vazio;
  btnLimpar.disabled = vazio;
}

function atualizarTela() {
  renderizarFila();
  atualizarBotoes();
}

btnAdicionar.addEventListener("click", () => {
  const nome = obterNome();
  if (!nome) return;

  adicionarPessoa(nome, false);
  atualizarTela();
});

btnPrioridade.addEventListener("click", () => {
  const nome = obterNome();
  if (!nome) return;

  adicionarPessoa(nome, true);
  atualizarTela();
});

btnAtender.addEventListener("click", () => {
  const atendido = atenderPessoa();

  if (!atendido) {
    mostrarToast("Fila vazia!");
    return;
  }

  atualizarTela();
});

btnLimpar.addEventListener("click", () => {
  limparFila();
  atualizarTela();
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const nome = obterNome();
    if (!nome) return;

    adicionarPessoa(nome, false);
    atualizarTela();
  }
});

atualizarTela();