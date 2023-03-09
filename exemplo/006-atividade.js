/*
    CRIAR UM PROGRAMA QUE RECEBA DOIS VALORES, O INICIAL E O FINAL
    SE O VALOR INICIAL FOR MENOR QUE O FINAL EXIBA UMA CONTAGEM CRESCENTE 
    SE O VALOR INICIAL FOR MAIOR QUE O FINAL EXIBA A CONTAGEM DECRESCENTE 
*/

let entrada = require('prompt-sync')();

let v1 = entrada('Digite o valor inicial');
let v2 = entrada('Digite o valor final');

let valorin = parseInt(v1);
let valorfin = parseInt(v2);

if (valorin < valorfin); {

    for (let i = valorin; i <= valorfin; i++) {
        console.log(i);
    }

} else if(valorin > valorfin){
    for (let i = valorin; i <= valorfin; i--){
        console.log(i);
    }
} else {
    console.log();
}