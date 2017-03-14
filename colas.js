var nombre = [ "Anna", "juan","pedro", "paulina", "laura"];
var apellido = ["Luz", "Dominguez","Fernandez", "Arellano", "Estrada"];


var nombres =[];
function armar(nombre, apellido){
  for(i= 0; i < nombre.length; i++){ //se cambian los parametros para sacar el orden

    nombres.push(nombre[i] + " " + apellido [i]);

  }
 return nombres;
}
armar(nombre, apellido);
