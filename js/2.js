/*2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 
Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.*/


let cuenta = {
  titular:'Alex',
  saldo: 0,
ingresar: (cantidad)=>{
  cuenta.saldo = cuenta.saldo + cantidad
},
extraer: (retirar)=>{
  cuenta.saldo = cuenta.saldo - retirar
},
informar: ()=>{
  document.write(`<br> Estado de cuenta: ${cuenta.saldo}`)
},
descripcion: ()=>{
  document.write(`<br>Titular de la cuenta: ${cuenta.titular} <br>Saldo: ${cuenta.saldo}`)
},
}

cuenta.descripcion();
let cantidad = parseInt(prompt('Ingresa el monto que quieres depositar'));
let retirar = parseInt(prompt('Ingresa el monto que quieras extraer'));
cuenta.ingresar();
cuenta.extraer();
cuenta.informar();
cuenta.descripcion;



// me tira un NAN
