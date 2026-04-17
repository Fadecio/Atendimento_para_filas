function carregarFilaDoStorage() {
  const item = localStorage.getItem("fila");

  if (!item) return [];

  try {
    const parsed = JSON.parse(item);

    if (!Array.isArray(parsed)) return [];

    return parsed
      .filter(
        (pessoa) =>
          pessoa &&
          typeof pessoa.nome === "string" &&
          typeof pessoa.prioridade === "boolean"
      )
      .map((pessoa) => ({ nome: pessoa.nome, prioridade: pessoa.prioridade }));
  } catch {
    return [];
  }
}

export let fila = carregarFilaDoStorage();

export function setFila(novaFila) {
  fila = novaFila;
}