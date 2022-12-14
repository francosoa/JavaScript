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
const acompanhado = true

//ifs encadeados
if (comprador >= 18){
    console.log("****Comprador maior de idade. Seu destino é: ****")
    console.log(listaDeViagem[1])
}else{
    if (acompanhado == true){
        console.log("*****Passageiro(a) acompanhado: *****")
        console.log(`Seu destino é: ${listaDeViagem[1]}*****`)
    }else 
        {console.log(`*******Venda não autorizada*******\n Motivo: Idade ${comprador}`)}
    }

//ifs encadeados
