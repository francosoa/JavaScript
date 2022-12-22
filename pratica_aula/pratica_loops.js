console.log("\n Prática de Loops")

//lita de cidades
//lista de viajantes
//se uma cidade for colocada pelo um viajante, ela será excluida da lista
//e será impresso o nome da pessoa, o destino comprado e no final a lista com as cidades restantes

console.log("\n Países");

const newList = new Array (
    'Paris',
    "Espanha",
    "Singapura",
    "México")
;

const passIdade = 16;
const acom = false;
const passport = true;
const destino = 'Paris'

console.log(`lista de locais:  \n ${newList}`);
console.log("********************************************")
console.log("********************************************")

if(passIdade >= 18 && passport ==true) {
    newList.splice(0,1)
    console.log(`Seu destino para ${destino} foi comprado!`)
    let buyTheTicket = true;
}else{
    if (passIdade <= 18 && acom == true){
        newList.splice(0,1)
        console.log(`Seu destino para ${destino} foi comprado!`)
        let buyTheTicket = true;
    } else{
        console.log("Sua compra foi recusada")
    }
}

