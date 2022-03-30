// FÓRMULA DE CALCULO
// Carne - 650g por pessoa / if / + 6 horas /então/ 850g
// Cerveja - 1500 ml por pessoa / if / + 6 horas /então/ 2000
// Refrigerante/agua - 400ml / if / + 6 horas / então/ 800ml
// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdTotalCarne = (carnePP(duracao) * adultos + (carnePP(duracao)) / 2 * criancas);
    console.log("Carne: ", qdTotalCarne.toFixed(2), "kg");

    let qdTotalCerveja = Math.ceil(cervejaPP(duracao) * adultos / 355);
    console.log ("Latas de cerveja: ",qdTotalCerveja);

    let qdTotalBebidas = Math.ceil(bebidasPP(duracao) * adultos + (bebidasPP(duracao) /2 * criancas));
    console.log("Quantidade de bebidas (2L): ", qdTotalBebidas);

    resultado.innerHTML = `<p>${qdTotalCarne.toFixed(2)}Kg de Carne </p>`
    resultado.innerHTML += `<p>${qdTotalCerveja} Latas de cerveja </p>`
    resultado.innerHTML += `<p>${qdTotalBebidas} Litros de bebidas </p>`

}

function carnePP(duracao) {
    let carne = 0.40;
    if (duracao >= 6) {
        return 0.60;
    } else {
        return 0.40;
    }
}

function cervejaPP(duracao) {
    let cerveja = 1500;
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1500;
    }
}

function bebidasPP(duracao) {
    let bebida = 0.650;
    if (duracao >= 6) {
        return 0.850;
    } else {
        return 0.650;
    }
}
