/*
    CRIAR UM PROGRAMA QUE RECEBA DOIS VALORES, O INICIAL E O FINAL
    SE O VALOR INICIAL FOR MENOR QUE O FINAL EXIBA UMA CONTAGEM CRESCENTE 
    SE O VALOR INICIAL FOR MAIOR QUE O FINAL EXIBA A CONTAGEM DECRESCENTE 
*/

let entrada = require('prompt-sync')();
console.log('atividade estrutura de repetição');

let v1 = parseInt(entrada('Digite o valor inicial '));
let v2 = parseInt(entrada('Digite o valor final '));

if (v1 < v2) {
    while (v1 <= v2 ) {
        console.log(v1);
        v1++;
    }
} else {
    while (v2 <= v1) {
        console.log(v1);
        v1--;
    }
}