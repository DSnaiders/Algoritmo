function saludar(){
    console.log("HOLA MUNDO")
    alert("hello world")
}

// algotitmo que realiza una suma entre valores ingresados por el usuario


function suma(){
    // 1.declarar variables necesarias  para  la funcion o algoritmo
    
    let  a= 0;
    let b = 0;
    let suma  = 0;
    
    //  2.solicitar al usuario que ingrese los valores
    //y estos  se asignan a las variables

    a = parseInt(prompt("ingrese el primer valor "))
    b = parseInt(prompt("ingrese el segundo numero "))

    //realizar la operacion o procedimiento

    suma = a + b;

    //mostrar el resultado

    alert("el  resultado  es "  + suma)
}


//algoritmo que  realiza una suma ,resta multiplicacion o division entre 2  valores ingresados  por el usuario

function opbasicas(){
    let x= 0;
    let y= 0;
    let sumatoria = 0;
    let resta = 0;
    let multiplicacion = 0;
    let division = 0;

    x = parseInt(prompt("ingrese el primer numero"))
    y = parseInt(prompt("ingrese el segundo valor"))

    sumatoria = x + y;
    resta= x - y;
    multiplicacion= x * y;
    division= x / y;

    alert("el resultado de la suma es " + sumatoria +" el resultado de la resta es " + resta + " el resultado de la  multiplicacion " + multiplicacion + " elresultado de  la  division  es " + division)
}

//realizar un algoritmo que determine el cuadrado  de un numero ingresado por  el usuario

function cuadrado(){

    let cua=0;
    let= resultado= 0;

    cua= parseInt(prompt("ingrese el numero"))
    resultado= cua * cua;
    alert("el resultado es "+ resultado)
}

//revisar un algoritmo que determine el area de un triangulo apartir de la base y la altura ingresados por el usaurio
//conversion de  unidades

function area(){

    let base = 0;
    let altura = 0;
    let area = 0;

    base = parseInt(prompt("ingrese la base"))
    altura = parseInt(prompt("Ingrese la alura "))
    
    area = (base * altura)/2
    alert("El resultado es" + area)

}

// Algoritmo que determine los metros y centímetros de un valor dado en pulgadas

function pulgadas(){
    let pul = 0;
    let km = 0;
    let cm = 0;
    let mm = 0;
    let m = 0;

    pul = parseInt(prompt("ingrese su valor en pulgadas"))
    km = pul * 0.0000254
    cm = pul * 2,54
    mm = pul * 25,4
    m = pul * 0.0254

    alert("el resultado en milimetros es" + mm)

}

// algoritmo que determine el numero ingresado es par o impar

function ImpoPar(){
    let num = 0;
    let resultado = 0;

    num = parseInt(prompt("ingrese el numero"))
    resultado = num / 2

    if (num == 0){
        alert("el numero ingresado es par" + resultado)
    }
    else{

        alert("el numero es impar"  + resultado)
    }
}

// Algoritmo que determine el mayor de dos números ingresado por el usuario 

function mayor(){
    let num1 = 0;
    let num2 = 0;

    num1 = parseInt(prompt("ingrese el primer numero"))
    num2 = parseInt(prompt("ingrese el segundo numero"))

    if ( num1 > num2){
        alert("el numero mayor es" + num1)
    }

    else{
        alert("el numero mayor es" + num2)
    }
}

// Algoritmo que determine el menor de tres números ingresado por el usuario 

function menor(){
    let num1 = 0;
    let num2 = 0;
    let num3 = 0;

    num1 = parseInt(prompt("ingrese el primer numero"))
    num2 = parseInt(prompt("ingrese el segundo numero"))
    num3 = parseInt(prompt("ingrese en tercer numero"))

    if ((num1<num2)&&(num1<num3)){
        alert("el nummero menor es" + num1)
    }
    else if ((num2<num1)&&(num3<num1)){
        alert("el numero menor es" + num2)
    }

    else if ((num3<num1)&&(num3<num2)){
        alert("el numero menor es" + num3)
    }
        
}

// El colegio ABC requiere un sistema que capture el nombre del estudiante, materia, y 7 calificaciones, entre 1 y 10, con esta información, determinar si el estudiante aprobó o reprobó, teniendo en cuenta que se aprueba con 6.1

function colegioABC(){
    let nombreEstudiante = 0;
    let nombreMateria =0;
    let nota1 = 0;
    let nota2 = 0;
    let nota3 = 0;
    let nota4 = 0;
    let nota5 = 0;
    let nota6 = 0;
    let nota7 = 0;

    nombreEstudiante = parseInt(prompt("ingrese el nombre del estudiante"))
    nombreMateria = parseInt(prompt("ingrese el nombre de la materia"))
    nota1 = parseInt(prompt("ingrese la primera nota"))
    nota2 = parseInt(prompt("ingrese la segunda nota "))
    nota3 = parseInt(prompt("ingrese la tercera nota "))
    nota4 = parseInt(prompt("ingrese la cuarta nota "))
    nota5 = parseInt(prompt("ingrese la quinta nota "))
    nota6 = parseInt(prompt("ingrese la sexta nota "))
    nota7 = parseInt(prompt("ingrese la septima nota "))

   

    

}
// Un individuo desea invertir su capital en un banco, y requiere saber cuánto dinero ganara, después de n números de años, teniendo en cuenta, que el banco paga un interés mensual, del 0,7%


function inversion(){
    let capital, tiempo, interesGanancia, totalGanancia

    capital = parseInt(prompt("Ingrese el capital que va a invertir"))
    tiempo = parseInt(prompt("por favor ingrese en tiempo en años"))

    interesGanancia = (capital * 0.084) * tiempo;

    totalGanancia = capital + interesGanancia;

    alert("su ganancia e de" + interesGanancia)

    alert("su ganancia total es de" + totalGanancia)
}