//1
let array1 = []
array1.push( 1, 2,5,10,25,55)

//2
let array2 =[];
let numeros = prompt("Ingresa varias palabras separadas por coma:").split(",");

array2 = numeros;
console.log(array2)


//3

let array3 = [10,40,30,20,15,5];
array3.sort(function(a, b) {return a - b});

console.log("El arreglo ordenado de menor a mayor " + array3);