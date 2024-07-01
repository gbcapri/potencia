const prompt = require("prompt-sync")();

let base = +prompt("Qual é a base da potência? ");
let expoente = +prompt("Qual é o expoente? ");

let resultado = 0;
let base_aux = base;

for (let i = 1; i < expoente; i++) {
    for (let j = 0; j < base; j++) {
        resultado += base_aux;
    }
    base_aux = resultado;
    base--;
}

console.log("O resultado é: " + resultado);
