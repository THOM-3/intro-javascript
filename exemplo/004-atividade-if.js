// Crie um progama que receba duas notas de 0 a 10,
// Calcule a média e com a média
// exiba as seguintes mensagens para para cada faixa de valores
// nota < 5 = I, nota >= 5 e < 6.5 = R, nota > 6.5 e < 8.5 = B
// e nota >= 8.5 MB


let entrada = require('prompt-sync')();

let nota1 = parseFloat(entrada("Digite a primeira nota (de 0 a 10):"));
let nota2 = parseFloat(entrada("Digite a segunda nota (de 0 a 10):"));

// Calcula a média
let media = (nota1 + nota2) / 2;

// Exibe a mensagem correspondente à média
if (media < 5) {
    console.log("I");
} else if (media >= 5 && media < 6.5) {
    console.log("R");
} else if (media >= 6.5 && media < 8.5) {
    console.log("B");
} else {
    console.log("MB");
}