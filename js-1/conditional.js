/*
function calculationColor(number) {
  if (number == 1) return "El color es negro";
  if (number == 2) return "El color es blanco";
  if (number == 3) return "El color es azul";
  return "El color es verde";//
}
*/

function calculationColor(num) {
  var color;
  if (num === 1) {
    color = "negro";
  } else if (num === 2) {
    color = "blanco";
  } else if (num === 3) {
    color = "rojo";
  } else {
    color = "verde";
  }

  return "El color es " + color;
}


console.log(calculationColor(1));
console.log(calculationColor(2));
console.log(calculationColor(3));
console.log(calculationColor(8));