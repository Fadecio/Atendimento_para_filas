import { fila } from "./state.js";
import { salvarFila } from "./storage.js";

export function adicionarPessoa(nome, prioridade = false) {
    const novaPessoa = { nome, prioridade };

    if (prioridade) {
        const index = fila.findIndex((pessoa) => !pessoa.prioridade);

        if (index === -1) {
            fila.push(novaPessoa);
        } else {
            fila.splice(index, 0, novaPessoa);
        }
    } else {
        fila.push(novaPessoa);
    }
    
    salvarFila();
}

export function atenderPessoa() {
    if (fila.length === 0) return null;

    const atendido = fila.shift();
    salvarFila();
    return atendido;
}

export function limparFila() {
    fila.length = 0;
    salvarFila();
}

export function removerPessoa(index) {
    fila.splice(index, 1);
    salvarFila();
}