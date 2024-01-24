const notaPrimeiroBi = 10;
const notaSegundoBi = 10;
const notaTerceiroBi = 10;
const notaQuartoBi = Number.parseInt('10');

let media = (notaPrimeiroBi + notaSegundoBi + 
    notaTerceiroBi + notaQuartoBi) / 4
 
if (media >= 6 && media != 10){
    media += media * 0.2
    console.log(`Parabéns, sua média final foi ${media}.
                Você foi aprovado`);
}else{
    console.log(`Sua média foi ${media}.
                Sinto muito, você foi reprovado`)
}

