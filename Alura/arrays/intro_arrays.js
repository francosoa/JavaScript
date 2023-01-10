/*
var --> tem um escopo global e de função. 
Quando está num escopo global, significa que pode ser sua variável pode ser utilizada 
em qualquer parte do código.
No contexto de função, significa que a variável que foi declarada, só pode ser utilizada dentro 
da função que foi construída

Let --> é uma variável que funciona dentro de blocos.
Bloco é o código declarado dentro de {}. O let ele pode ser atualizado, mas não declarado 
novamente

const --> é uma variável fixa, que não pode ser atualizada
*/

const notas = [10, 6.5, 8, 7.5];
const media = (notas[0] + notas[1]+ notas[2] + notas[3]) / notas.length;

console.log(media);

/*
Adicionando elementos:
*/

const notes = [10, 6, 8];
notes.push(7); //adiciona um novo elemento ao array

const ava = (notes[0] + notes[1]+ notes[2] + notes[3]) / notes.length;
console.log(ava);

/*
Deletando elementos:
*/

const delete_notes = [10, 6, 8, 5.5, 10];
delete_notes.pop(); // Deleta o último elemento de uma lista

