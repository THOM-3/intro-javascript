// fazendo referencia para a biblioteca de entrada de dados
let entrada = require('prompt-sync')();
let nome = entrada('Eu te chamo como? ');
console.log('nome digitado: ' + nome );


// Trabalhando com números do jeito errado
 
// let n1 = entrada('digite o 1° número: ');
// let n2 = entrada('digite o 2° número: ');

// Modo certo

let vDigitado;
vDigitado = entrada('digite o 1° número: ');
let n1 = parseInt(vDigitado);
 vDigitado = entrada('digite o 2° número:');
let n2 = parseInt(vDigitado); 

let soma = n1 + n2;
let subtracao = n1 - n2;
let multiplicacao = n1 * n2;
let divisao = n1 / n2;

console.log('O resultado da SOMA foi '+ n1 + ' e ' + n2 + ' = '+ soma);
console.log('O resultado da SUB foi '+ n1 + ' e ' + n2 + ' = '+ subtracao);
console.log('O resultado da MULT foi '+ n1 + ' e ' + n2 + ' = '+ multiplicacao);
console.log('O resultado da DIV foi '+ n1 + ' e ' + n2 + ' = '+ divisao.toFixed(2));

entrada('Precione enter para encerrar');

