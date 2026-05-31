import { elementos } from "./dom.js";
import { calculaParticipacao } from "./calculator.js"

function aplicaValores(){

    const salarioUm = Number(elementos.primeiraPersonaSalario.value);
    const salarioDois = Number(elementos.segundaPersonaSalario.value);
    const valorFatura = Number(elementos.valorFatura.value);

    const mostrarParticipacao = calculaParticipacao(salarioDois, salarioUm, valorFatura);
    
    innerPrimeiraPersonaNome.innerHTML = elementos.primeiraPersonaNome.value;
    innerSegundaPersonaNome.innerHTML = elementos.segundaPersonaNome.value;
    infoPrimeiraPersonaNome.innerHTML = elementos.primeiraPersonaNome.value;
    infoSegundoPersonaNome.innerHTML = elementos.segundaPersonaNome.value;
    
    if(!calculaParticipacao(salarioDois, salarioUm, valorFatura)){
        limpaValores();
    }
    else{
        pagarPessoaUm.innerHTML = mostrarParticipacao.valorPessoaUm.toFixed(2);
        porcentagemPessoaUm.innerHTML = `${mostrarParticipacao.percentualPessoaUm.toFixed(0)}%`;
        pagarPessoaDois.innerHTML = mostrarParticipacao.valorPessoaDois.toFixed(2);
        porcentagemPessoaDois.innerHTML = `${mostrarParticipacao.percentualPessoaDois.toFixed(0)}%`;

        elementos.summaryCardChart.style.setProperty("--progresso", `${mostrarParticipacao.percentualPessoaUm.toFixed(0)}%`);
    }

}

function limpaValores(){

    pagarPessoaUm.innerHTML = "0";
    porcentagemPessoaUm.innerHTML = `0%`;
    pagarPessoaDois.innerHTML = "0";
    porcentagemPessoaDois.innerHTML = `0%`;

}

elementos.botaoLimpar.addEventListener('click', limpaValores);
elementos.botaoCalcular.addEventListener('click', aplicaValores);