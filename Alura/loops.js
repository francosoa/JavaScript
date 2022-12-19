console.log("\n Loops");

const listaDeDestinos = new Array(
    "Salvador",
    `São Paulo`,
    `Rio de Janeiro`
);

//variável
const idadeComprador = 18;
const estaAcompanhado = false;
let temPassagemComprada = false;
const destino = "Curitiba";
const podeComprar = (idadeComprador >=18 || estaAcompanhado ==true);

let contador = 0;
let destinoExiste = false;

while(contador < 3){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break   
    }
    contador +=1
}
console.log("Destino existe :", destinoExiste);

//IFS

if(podeComprar && destinoExiste){
    console.log("Boa Viagem...");
}else{
    console.log("Você não está autorizada")
}

// FOR

for(let cont = 0 ; cont < 3 ; cont ++){
    if(listaDeDestinos[cont] == destino){
        destinoExiste == true
        console.log("O destino existe")
        break
    }else{
        console.log("O Destino não existe")
    }
}
