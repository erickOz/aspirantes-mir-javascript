let receta = {

}
receta.nombre = 'Sandwich';
receta.ingredientes = [];

receta.ingredientes.push(
  {
    nombre: 'Pan',
    cantidad: 2,
  }
)

receta.ingredientes.push(
  {
    nombre: 'Queso',
    cantidad: 2,
  }
)

console.log(receta.ingredientes[0].nombre);

let suma = 0;
for (let value of receta.ingredientes) {
  suma += value.cantidad;
}

//receta.ingredientes.forEach(element => {
//  suma += element.cantidad;
//});

//for (let i = 0; i < receta.ingredientes.length; i++) {
//  suma += receta.ingredientes[i].cantidad;
//}

console.log("Cantidad total de ingredientes: " + suma);