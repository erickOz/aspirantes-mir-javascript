//Acá desarrollaremos las fxs solicitadas en el ejercicio 2

//fx que recibe array de números y devuelve la suma de los elementos
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    //sum += parseInt(array[i]);
    sum += array[i];
  }
  return sum;
}

console.log("Suma de los elementos del array:");
console.log(sum([1, 2, 3]));
console.log(sum([10, 8, 12, 5]));
console.log(sum([]));

//fx que recibe un array de números y devuelve el mayor valor, 
//si el array está vacío devuelve undefined
function max(array) {
  let max = array[0];//si no hay elementos en el array, devuelve undefined
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) max = array[i];
  }
  return max;
}

console.log("Mayor valor del array:");
console.log(max([1, 3, 2]));
console.log(max([10, 9, 8, 7, 6, 5, 4]));
console.log(max([]));

//fx que recibe un array de números y devuelve el índice del mayor vaor
function maxIndex(array) {
  let max = array[0];//si no hay elementos en el array, devuelve undefined
  let maxIndex = -1;
  for (let i = 0; i < array.length; i++) {
    if (max <= array[i]) {
      max = array[i];
      maxIndex = i;
    }
  }
  return maxIndex;
}

console.log("Índice del mayor valor del array:");
console.log(maxIndex([1, 3, 2]));
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4]));
console.log(maxIndex([]));

//fx que recibe un array de números y devuelve un string con todos los
// elementos separados por un espacio
function join(array) {
  let str = "";
  for (let i = 0; i < array.length; i++) {
    str += array[i] + " ";
  }
  return str;
}

console.log("String con los elementos del array separados por un espacio:");
console.log(join([1, 3, 2]));
console.log(join([10, 9, 8, 7, 6, 5, 4]));
console.log(join([]));

