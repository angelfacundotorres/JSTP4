/*2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 
Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.*/


let cuenta = {
  titular : 'Alex',
  saldo: 0,

  ingresar:(montoIngresar)=>{
    cuenta.saldo = cuenta.saldo + montoIngresar;
  },
  extraer:(montoExtraer)=>{
    cuenta.saldo = cuenta.saldo - montoExtraer;
  },
  informar:()=>{
    document.write('<br>Estado de cuenta: '+ cuenta.saldo +'<br>');
  },
  descripcion:()=>{
    document.write('<br> Titular: '+ cuenta.titular + '<br>Saldo: '+ cuenta.saldo);
  }
}
cuenta.descripcion();
let montoIngresar = parseInt(prompt('Ingrese el monto que quieres depositar'));
let montoExtraer = parseInt(prompt('Ingrese el numero que quieres extraer'));
cuenta.ingresar(montoIngresar);
cuenta.extraer(montoIngresar);
cuenta.informar();
