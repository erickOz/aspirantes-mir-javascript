function bmi(weight, height) {
  let imc = weight / (height * height);
  return imc;
}

console.log(bmi(65, 1.8));
console.log(bmi(76, 1.6));
console.log(bmi(52, 1.75));