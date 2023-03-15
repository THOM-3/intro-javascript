// comentário de 1 linha 
console.log('Hello world!');
/*
    Comentário 
    de mais de uma linha
    
*/

let nome = 'João';
let idade = 21;
let altura = 1.85;
let trabalha = true;
let corfavorita = 'Vermelho';
let cores_favoritas = ['Vermelho', 'azul', 'amarelo'];
let endereco = {
'Logradouro' : 'Rua',
'nome_log'   : 'Brasil',
'n'          : '105 A',
'bairro'     : 'centro'
};
let covid;
let dengue = null
const exfunc = () => 10;
// ou const exfunc = () => {};

console.log('Variável nome = ' + typeof(nome));
console.log('Variável idade = ' + typeof(idade));
console.log('Variável altura = ' + typeof(altura));
console.log('Variável trabalha = ' + typeof(trabalha));
console.log('Variável corfavorita = ' + typeof(corfavorita));
console.log('Variável cores_favoritas = ' + typeof(cores_favoritas));
console.log('Variável endereco = ' + typeof(endereco));
console.log('Variável covid = ' + typeof(covid));
console.log('Variável dengue = ' + typeof(dengue));
console.log('Variável exfunc = ' + typeof(exfunc));

//exibir objeto
console.log(endereco.Logradouro + '' + endereco.nome_log + ', ' + endereco.n + ' - ' + endereco.bairro);
