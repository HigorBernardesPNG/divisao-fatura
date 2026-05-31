import { validarSalarios } from "./validation.js";
import { elementos } from "./dom.js";


export function calculaParticipacao(salarioDois, salarioUm, valorFatura){

    if(!validarSalarios(salarioUm, salarioDois)){
        alert("Valores invalidos");
        return false;
    }

    const somaSalarios = salarioDois + salarioUm;
            
    const participacaoUm  = salarioUm / somaSalarios;
    const participacaoDois = salarioDois / somaSalarios;

    const valorPessoaUm = valorFatura * participacaoUm;
    const percentualPessoaUm = (valorPessoaUm / valorFatura) * 100;
    const valorPessoaDois = valorFatura * participacaoDois;
    const percentualPessoaDois = (valorPessoaDois / valorFatura) * 100;

    const participacao = {
        valorPessoaUm,
        valorPessoaDois,

        participacaoUm,
        participacaoDois,

        percentualPessoaUm,
        percentualPessoaDois,
    }

    return participacao;

}
