var nombre = [ "Anna", "juan","pedro", "paulina", "laura"];
var apellido = ["Luz", "Dominguez","Fernandez", "Arellano", "Estrada"];


var nombres =[];
function armar(nombre, apellido){
  for(i=nombre.length - 1; i>= 0 ; i--){

    nombres.push(nombre[i] + " " + apellido [i]);

  }
 return nombres;
}
armar(nombre, apellido);
