/*
Slice fatia um array, mas não altera o original. É preciso referenciar uma nova variável
*/

const alunos = [
    "João",
    "Juliana",
    "Ana",
    "Caio",
    "Lara",
    "Marjorie",
    "Guilherme",
    "Aline",
    "Fabiana",
    "Andre",
    "Carlos",
    "Paulo",
    "Bia",
    "Vivian",
    "Isabela",
    "Vinícius",
    "Renan",
    "Renata",
    "Daisy",
    "Camilo",
];

const sala1 = alunos.slice(0,alunos.length / 2); //pega a metade da lista 
const sala2 = alunos.slice(alunos.length / 2); // quando não coloca o segundo par, ele pega até o fim

console.log(`alunos da sala1 ${sala1}`)
console.log(`alunos da sala2 ${sala2}`)

/* 
Utilizando o splice:
O Splice serve para remover itens de uma array com base no index.
*/

const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

nomes.splice(1, 2, "Rodrigo"); // O slice pede o index, qnts elementos vai remover a partir do index, e posso passar um terceiro paramentro
console.log(nomes)

/* 
Concatenando os arrays:
*/

const salaJS = ["Evaldo", "Camis", "Mari"];
const salaPython = ["Ju", "Leo", "Raquel"];

const unificada = salaJS.concat(salaPython);
console.log(unificada);