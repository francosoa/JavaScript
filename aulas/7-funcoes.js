//utiliza a palavra chave function

function exibeInfosEstudantes(nome, idade, nota) {
    return `o nome do aluno é ${nome} e ele(a) possui ${idade} anos. Sua nota é ${nota}`
}

aluno = exibeInfosEstudantes('Francisco', 20, 9.5)
console.log(aluno)