// tipos de datos
let nombre="josue david bermudez";
let edad=20;
let mayorEdad = false;
let estatura;

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof mayorEdad);
console.log(typeof estatura);


//tipo de datos complejos

let frutas = ["mango","uva","pera","manzana"];

let auto={
    modelo: 2023,
    marca: "suzuki",
    color:"blanco",
    cilindraje:2100,
    tipo : "camioneta"
};

//concatenando variables

console.log("bienvenido usuario "+ nombre + "su edad  es "+  edad + " y su fruta favorita es " + frutas [0]);

//estrucutura controlcondicional

console.log("_______________________________________________________")
if(edad > 25) {
    console.log("es  un adulto")
}
else if(edad > 18){
    console.log("es un joven")
}
else if(edad > 11){
    console.log("es un pelado")

}
else{
    console.log("es un bebe")
}


let tipoSuscripcion= "gold";
switch (tipoSuscripcion) {
    case "basic":
        console.log("tu plan es basico")
        break;
    case "gold":
        console.log("tienes el gold")
    
    case "platium":
        console.log("tu plan es platium")
    
        break;

    default:
        console.log("este plan no existe");
        break;};

//estructura de  controlde bloques

let contador=0;
while (contador < 11){
    console.log("este es el numero " + contador);
    contador = contador + 1;
}

for  (let  i=100; i>0; i=i-10){
    console.log("contador con for numero" + i)
}