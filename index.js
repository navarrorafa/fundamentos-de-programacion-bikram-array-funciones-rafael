
//### Arrays ###

//- [ ] 1.- Crear variable de nombre **arrayVacio** cuyo valor sea **un array vacío**
let arrayVacio = [];

//- [ ] 2.- Crear variable de nombre **arrayNumeros** declarada con un **array de números del 0 al 9 (0, 1, 2...)**
let arrayNumeros = [0,1,2,3,4,5,6,7,8,9];

//- [ ] 3.- Crear variable de nombre **arrayNumerosPares** declarada con un **array con los números pares del 0 al 9** (considerando al 0 par)
let arrayNumerosPares = [0,2,4,6,8];

//- [ ] 4.- Crear variable de nombre **arrayBidimensional** declarada con valor **array [[0, 1, 2], ['a', 'b', 'c']]**
let arrayBidimensional = [[0,1,2],['a','b','c']];

//### Funciones ###

//- [ ] 5.- Crea la función **suma** que acepte como argumento **dos números** y devuelva **el resultado de su suma**
let suma = (a,b) => {
    let result = a + b;
    return result
}
    

//- [ ] 6.- Crea la función **potenciacion** que acepte como argumento **dos números** y devuelva **el resultado de elevar el primero(a) al segundo(b) (a^b)**
let potenciacion = (a,b) => {
    let resultPot = a**b ;
    return resultPot
}

//- [ ] 7.- Crea la función **separarPalabras** que acepte como argumento **un string** y devuelva **un array de palabras 'hola mundo' => [hola, mundo]**
let separarPalabras = (a) => {
    let resultSepararPalabras = a.split(" ") ;
    return resultSepararPalabras
}

//- [ ] 8.- Crea la función **repetirString** que acepte como argumento **un string y un número** y devuelva **un string que sea el resultado de concatenar el primer string el número dado de veces**
let repetirString = (varString,veces) => {
    let resultString = "";
    for (let i = 0 ; i < veces ; i++){
        resultString += varString ; 
    }
    return resultString
}

//- [ ] 9.- Crea la función **esPrimo** que acepte como argumento **un número** y devuelva ****true si es primo y false si no lo es****

/*let esPrimo = x => {
    if (x <= 1 ) {
        return false
    } else if (x % 2 == 0|| x % 3 == 0 || x % 2 == 5|| x % 7 == 0 ){
        return false 
} return true }*/


//### Mezclando arrays y funciones ###

//- [ ] 10.-  Crear la función **ordenarArray** que acepta como argumento **un array de números** y devuelva un **array ordenado de menor a mayor**
let numeros = []; 
let ordenarArray = (numeros) => {
   return numeros.sort();
} 


//- [ ] 11.- Crear la función **obtenerPares** que acepta como argumento **un array de números** y devuelva un **array con los elementos pares**

// ESTA CORRECTO
/*
let obternerPares = numeros => {
    let arrayPares = [];
    for (let i = 0 ; i < numeros.length ; i ++) {
          if(numeros[i] % 2 === 0) {
            arrayPares.push(numeros[i])  
          }     
    }
    return arrayPares; 
};*/


//- [ ] 12.- Crear la función **pintarArray** que acepte como argumento **un array** y devuelva **una cadena de texto Array entrada: [0, 1, 2] String salida: '[0, 1, 2]'**
/*
let pintaArray = (inArray) => {
    let arrayOut = [];
    for (let datos of inArray) {
        arrayOut.push(datos.toString());
    }
    return arrayOut 
}*/

//- [ ] 13.- Crear la función **arrayMapi** que acepte como argumento **un Array y una función** y devuelva **un array en el que se haya aplicado la función a cada elemento del array**

let arrayMapi = (arr,funcion) => {
    let newArr = arr.map(funcion)
    return newArr
}

//- [ ] 14.- Crear la función **eliminarDuplicados** que acepte como argumento **un array** y devuelva **un array en el que se hayan eliminado los duplicados**

/** 
let eliminarDuplicados = (arr) => {
    let newArr= [];
    for (let i = 0 ; i < arr.length ; i++)
      for(let j = i + 1  ; j < arr.length ;  j++) {
        if(arr[i] !== arr[j]) {
          newArr.push(arr[i])
        }

      }
       return newArr
}
*/
 

//## Iteraciones :european_castle: proyecto :european_castle: ##

//### Arrays ###

//- [ ] 15.- Crear variable de nombre **arrayNumerosNeg** declarada con un **array de números del 0 al -9 (0, -1, -2...)**
let arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9];

//- [ ] 16.- Crear variable de nombre **holaMundo** declarada con valor **array con las palabras 'Hola' y 'Mundo'**
let holaMundo = ['Hola','Mundo'];

//- [ ] 17.- Crear variable de nombre **loGuardoTodo** declarada con valor **array con valores 'hola', 'que', 23, 42.33 y 'tal'**
let loGuardoTodo = ['hola', 'que' , 23 , 42.33 , 'tal'];

//- [ ] 18.- Crear variable de nombre **arrayDeArrays** declarada con valor **array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]**
let arrayDeArrays = [[756,'nombre'], [225,'apellido'], [298,'direccion']];

//### Funciones ###

//- [ ] 19.- Crea la función **multiplicacion** que acepte como argumento **dos números** y devuelva **el resultado de su multiplicación**
let multiplicacion = (x,y) => {
    return x*y
}

//- [ ] 20.- Crea la función **division** que acepte como argumento **dos números** y devuelva **el resultado de su division**
let division= (x,y) => {
    return x/y
}

//- [ ] 21.- Crea la función **esPar** que acepte como argumento **un número** y devuelva **true si es par y false si es impar**
let esPar = y => {
    if(y % 2 == 0) {
        return true 
    } else {
        return false
    }
}

//- [ ] 22.- Crea el array **arrayFunciones** que tenga como valor **las funciones: suma, resta y multiplicación (todas aceptan 2 números como argumento y devuelve el resultado de su operación)**

/* -------------------------
// CREO Q ESTA CORRECTA
arrayFunciones = [suma , resta , multiplicacion]    
// Function Suma 
let suma = (a,b) => {
    return a + b ;
}

//Function resta 
let resta = (a,b) => {
    return a - b ;
}

//Function multiplicacio
let multiplicacion  = (a,b) => {
    return a * b ;}

    ---------------*/


//### Mezclando arrays y funciones ###

//- [ ] 23.-  Crear la función **ordenarArray2** que acepta como argumento **un array de números** y devuelva un **array ordenado de mayor a menor**

const ordenarArray2 = (arr) => {
    return arr.sort()
}



//- [ ] 24.- Crear la función **obtenerImpares** que acepta como argumento **un array de números** y devuelva un **array con los elementos impares**

// ESTA CORRECTA
/*let obtenerImpares = (arr) => {
    let arrImpares = [];
    for (let i= 0 ; i < arr.length ; i++) {
        if (arr[i] % 2 !== 0) {
            arrImpares.push(arr[i]);
        }
    }
    return arrImpares;
}*/

//- [ ] 25.- Crear la función **sumarArray** que acepte como argumento **un array numérico** y devuelva **la suma de los números en el array Array: [1, 2, 3] resultado: 6**

let sumarArray = arr => {
    let suma = 0;
    for (let i = 0 ; i < arr.length ; i++) {
        suma+= newArr[i];

    }
    return suma
}

//- [ ] 26.- Crear la función **multiplicarArray** que acepte como argumento **un array numérico** y devuelva **la multiplicación de los números en el array Array:  [2, 3, 4] resultado: 24**
