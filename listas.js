console.log("trabalhando com array :");
console.log("--------------------------------------------------------------------")
console.log("--------------------------------------------------------------------")
const listaDeViagem = new Array(
'Salvador',
'São Paulo'
);

//Criando uma variável com uma lista
const add = ['Curitiba', 'Rio de janeiro', 'Fortaleza']

//Adicionando a variável na lista de viagem
listaDeViagem.push(add)
//removendo a variável
listaDeViagem.splice(2,1)

console.log(`lista de viagem: \n ${listaDeViagem}`)
console.log("--------------------------------------------------------------------")

listaDeViagem.push('Curitiba', 'Rio de janeiro', 'Fortaleza')

console.log("--------------------------------------------------------------------")
console.log(`Destinos atualizados: \n ${listaDeViagem}`)
console.log("--------------------------------------------------------------------")
console.log("--------------------------------------------------------------------")
//pegar determinado item com base na posição:
console.log(` O destino escolhido foi \n ${listaDeViagem[0]}`)

