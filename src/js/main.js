import { adicionarPessoa, atenderPessoa, limparFila } from "./queue.js";
import { renderizarFila } from "./ui.js";
import { fila } from "./state.js";

const input = document.getElementById("nome");
const btnAdicionar = document.getElementById("btn-adicionar");
const btnPrioridade = document.getElementById("btn-prioridade");
const btnAtender = document.getElementById("btn-atender");
const btnLimpar = document.getElementById("btn-limpar");
const toast = document.getElementById("toast");

let toastTimeout;

function mostrarToast(mensagem, tipo = "error") {
  toast.textContent = mensagem;
  toast.className = `toast show ${tipo}`;

  clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
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
  btnLimpar.disabled = vazio;
}

function atualizarTela() {
  renderizarFila(atualizarTela);
  atualizarBotoes();
}

btnAdicionar.addEventListener("click", () => {
  const nome = obterNome();
  if (!nome) return;

  adicionarPessoa(nome, false);
  atualizarTela();
  mostrarToast("Cliente adicionado com sucesso!", "success");
});

btnPrioridade.addEventListener("click", () => {
  const nome = obterNome();
  if (!nome) return;

  adicionarPessoa(nome, true);
  atualizarTela();
  mostrarToast("Cliente prioritário adicionado.", "success");
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
  mostrarToast("Fila limpa com sucesso.", "success");
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
