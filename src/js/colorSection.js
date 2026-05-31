import { elementos } from "./dom.js";

export function configurarTrocaDeCores() {
  elementos.colorPessoaUm.addEventListener("input", () => {
    document.documentElement.style.setProperty(
      "--color-primary",
      elementos.colorPessoaUm.value
    );
  });

  elementos.colorPessoaDois.addEventListener("input", () => {
    document.documentElement.style.setProperty(
      "--color-secondary",
      elementos.colorPessoaDois.value
    );
  });
}