import { elementos } from "./dom.js";
import { calculaParticipacao } from "./calculator.js";
import { mostrarFeedback } from "./formFeedback.js";
import { esconderFeedback } from "./formFeedback.js";
import { configurarTrocaDeCores } from "./colorSection.js";

configurarTrocaDeCores();

function aplicaValores(){

    const salarioUm = Number(elementos.primeiraPersonaSalario.value);
    const salarioDois = Number(elementos.segundaPersonaSalario.value);
    const valorFatura = Number(elementos.valorFatura.value);

    const mostrarParticipacao = calculaParticipacao(salarioDois, salarioUm, valorFatura);
    
    if(!calculaParticipacao(salarioDois, salarioUm)){
        mostrarFeedback(salarioUm, salarioDois);
        // limpaValores();
    }
    else{

        mostrarFeedback(salarioUm, salarioDois);

        innerPrimeiraPersonaNome.innerHTML = elementos.primeiraPersonaNome.value;
        innerSegundaPersonaNome.innerHTML = elementos.segundaPersonaNome.value;
        infoPrimeiraPersonaNome.innerHTML = elementos.primeiraPersonaNome.value;
        infoSegundoPersonaNome.innerHTML = elementos.segundaPersonaNome.value;

        pagarPessoaUm.innerHTML = mostrarParticipacao.valorPessoaUm.toFixed(2);
        porcentagemPessoaUm.innerHTML = `${mostrarParticipacao.percentualPessoaUm.toFixed(0)}%`;
        pagarPessoaDois.innerHTML = mostrarParticipacao.valorPessoaDois.toFixed(2);
        porcentagemPessoaDois.innerHTML = `${mostrarParticipacao.percentualPessoaDois.toFixed(0)}%`;

        elementos.summaryCardChart.style.setProperty("--progresso", `${mostrarParticipacao.percentualPessoaUm.toFixed(0)}%`);
        percentualPessoaUm.innerHTML = `${mostrarParticipacao.percentualPessoaUm.toFixed(0)}%`;
        percentualPessoaDois.innerHTML = `${mostrarParticipacao.percentualPessoaDois.toFixed(0)}%`;
        totalFaturaPagar.innerHTML = `R$ ${valorFatura}`;

        elementos.percentualPessoaUm.style.color = "var(--color-primary)";
        elementos.percentualPessoaDois.style.color = "var(--color-secondary)";
        elementos.totalFaturaPagar.style.color = "var(--color-invoice)";

    }

}

function limpaValores(){

    esconderFeedback();

    pagarPessoaUm.innerHTML = "0";
    porcentagemPessoaUm.innerHTML = `0%`;
    pagarPessoaDois.innerHTML = "0";
    porcentagemPessoaDois.innerHTML = `0%`;

    elementos.summaryCardChart.style.setProperty("--progresso", `100%`);
    percentualPessoaUm.innerHTML = `0%`;
    percentualPessoaDois.innerHTML = `0%`;
    totalFaturaPagar.innerHTML = `R$ 0`;

    elementos.percentualPessoaUm.style.color = "black";
    elementos.percentualPessoaDois.style.color = "black";
    elementos.totalFaturaPagar.style.color = "black";

}

elementos.botaoLimpar.addEventListener('click', limpaValores);
elementos.botaoCalcular.addEventListener('click', aplicaValores);