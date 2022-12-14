console.log("--------------------------------------------------------------------")
console.log("*****Operadores Lógicos*****")
console.log("--------------------------------------------------------------------")

const listaDeViagem = new Array(
    'Salvador', 
    'São Paulo',
    'Curitiba', 
    'Rio de janeiro',
    'Fortaleza'
    );

//A condição abaixo exclui se um passageiro for menor de idade

const comprador = 16
const acompanhado = false

//Tirando duplicação: 

if (comprador >= 18 || acompanhado==true){
    console.log("****Seu destino é: ****")
    console.log(listaDeViagem[1])
    listaDeViagem.splice(1,1)
}else{
    console.log(`*******Venda não autorizada*******\n Motivo: Idade ${comprador}`)
}

