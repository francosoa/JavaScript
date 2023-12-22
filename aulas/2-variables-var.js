// var é a primeira variável que surgiu no JS
//A vantagem da var é que eu posso utilizar ela antes de declarar
//EX:

var altura = 5;
var comprimento = 7;

area = altura * comprimento
var area // declarei a minha var apenas na linha 9
console.log(area)


//////////////////////////////////////////////////////////////////////
// Let -> surgiu a partir de 2015
// Posso reescrever com o let

let alturaLet = 5;
let comprimentoLet = 7;
let forma = 'retangulo'
let area

if (forma === 'retangulo') {
    area = alturaLet * comprimentoLet
} else{
    area = (alturaLet * comprimentoLet) / 2;
}

console.log(area)