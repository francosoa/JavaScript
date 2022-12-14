console.log("conversão de tipos")

console.log("2" + "2") // concatena os números
console.log(parseInt("2") + parseInt("2")) //O parse converte a string para int
//Número que são floats precisam ser referenciados com .
console.log(parseFloat("2.5") + 2)

//A conversão aqui não é necessária,pois o node faz a conversão automática.
//Mas no caso de adição é necessário
console.log("10"/"2")
console.log("10" * "2")