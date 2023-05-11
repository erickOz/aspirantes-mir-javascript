function sum2(number) {
  if (number === 1) return 1
  return number + sum(number - 1)
}

function sum(number) {
  let result = 0;//si es negativo retorna 0
  if (number > 0) {
    for (let i = 1; i <= number; i++) {
      result += i;
    }
  }
  return result;
}

//console.log(sum2(5));
console.log(sum(4));
console.log(sum(10));
console.log(sum(15));