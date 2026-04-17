import {fila} from "./state.js";

export function salvarFila() {
  localStorage.setItem("fila", JSON.stringify(fila));
}