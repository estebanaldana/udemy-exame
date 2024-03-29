
// Uso de Let y Const
let nombre:string = "Ricardo Tapia";
let edad:number = 23;

var PERSONAJE = {
  nombre: nombre,
  edad: edad
};

console.log(PERSONAJE);


// Cree una interfaz que sirva para validar el siguiente objeto
interface Hero{
  nombre:string,
  artesMarciales:string[]
}

function batiseñal(hero: Hero){
  console.log("a la mision " + hero.nombre)
};

let batman = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
};

batiseñal(batman);


// Convertir esta funcion a una funcion de flecha
function resultadoDoble( a:number, b:number ){
  return (a + b) * 2
}

let resultadodoble = ( a:number, b:number) => a+b;

console.log(resultadodoble(237,732));


// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, poder?:string, arma:string="arco" ){
  var mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder
  }
};

console.log(getAvenger("Spiderman", "Super Fuerza", "disparadores"))

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class rectangulo {

  base:number = 0;
  altura:number = 0;

  constructor( base:number, altura:number){
    this.base = base;
    this.altura = altura;
  }

  area():void{
    console.log(this.base * this.altura)
  }
}

let altura:rectangulo = new rectangulo(5, 9);

console.log(altura.area());
