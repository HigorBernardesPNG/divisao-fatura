import { elementos } from "./dom.js";

// const salarioUm = Number(elementos.primeiraPersonaSalario.value);
// const salarioDois = Number(elementos.segundaPersonaSalario.value);

export function validarSalarios(salarioUm, salarioDois){
    if(!Number.isFinite(salarioUm) && !Number.isFinite(salarioDois)){
        return false;
    }

    if(salarioUm <= 0 || salarioDois <= 0){
        return false;
    }
    else{
        return true;
    }
}