import { validarSalarios } from "./validation.js";
import { elementos } from "./dom.js";

function mensagemFeedback(tipo, mensagem) {
  elementos.formFeedback.classList.remove(
    "form-feedback--error",
    "form-feedback--success"
  );

  elementos.formFeedback.classList.add("is-visible");
  elementos.formFeedback.classList.add(`form-feedback--${tipo}`);

  elementos.formFeedbackMessage.textContent = mensagem;
}

export function mostrarFeedback(salarioUm, salarioDois) {
  if (!validarSalarios(salarioUm, salarioDois)) {
    mensagemFeedback("error", "Informe salários válidos para as duas pessoas.");
    return false;
  }
  else {
    mensagemFeedback("success", "A divisão da fatura foi calculada com sucesso.");
    return true;
  }
}

export function esconderFeedback() {
  elementos.formFeedback.classList.remove(
    "is-visible",
    "form-feedback--error",
    "form-feedback--success"
  );

  elementos.formFeedbackMessage.textContent = "";
}