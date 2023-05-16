
let persona = {
  nombre: 'Erick',
  edad: 25,
  ciudad: 'Lima',
  profesión: 'Ingeniero',
  presentación: function () {
    let txt = 'Hola, me llamo ' + this.nombre + ' y tengo ' + this.edad + ' años' + ' y soy de ' + this.ciudad;
    return txt;
  }
}
console.log(persona);

let mensaje = persona.presentación(persona);;
console.log(mensaje);


persona.hobbies = ['programar', 'fútbol', 'natación'];
console.log(persona.hobbies);

for (let value of persona.hobbies) {
  console.log(value);
}