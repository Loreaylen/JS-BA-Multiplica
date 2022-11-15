// Ejercicios de JavaScript 

////////// OPERACIONES BÁSICAS, TIPOS DE DATOS, PROMPT Y ALERT

////Escribir un programa que muestre un prompt donde el usuario ingresa un número, luego muestra otro prompt pidiendo otro número, finalmente el programa muestra una alerta con el resultado de la suma.

/* let num1 = Number(prompt("Escribe un número"));

let num2 = Number(prompt("Escribe otro número"));

alert(`El resultado es ${num1 + num2}`); */

//// Crear un programa donde el usuario ingrese en un prompt la temperatura en Celcius y el programa muestre en una alerta la temperatura en Fahrenheit.

/* let celcius = Number(prompt('Ingresa la temperatura en Celcius'))

alert(`La temperatura en Farenheit es: ${celcius*1.8 + 32}`) */

////Pedir un número a un usuario a través de un prompt y luego dividirlo por 10, ejemplo: 5 / 10 igual 0.5

/* let dividir = Number(prompt('Escribe un número'))

alert(`El resultado es: ${dividir/10}`) */

////Si a = [1,2,3] crear un script que determine de muestre un alert del tipo de dato de a.

/* const a = [1,2,3]

const esArray = (valor) => {
  if(Array.isArray(valor)){
    alert('Array')
  }
  else {
    alert(typeof valor)
  }
}

esArray(a) */

////////// IF AND ELSE

////Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en una alerta.

/* let num = Number(prompt('Escribe un número'))

if(num % 2 === 0){
  alert('Es par')
}
else {
  alert('Es impar')
} */

////Crear un programa que determine si un número introducido en un Prompt es divisible por 5 o no, mostrar el resultado con console.log

/* let a = Number(prompt('Escribe un número'))
if(a % 5 === 0){
  console.log(`Es divisible por 5. El resultado es: ${a/5}`)
}
else {console.log(`No se puede dividir por 5`)} */

////Crear un programa que determine si un número introducido en un popup es divisible por 11 y 5 o no, mostrar el resultado con console.log

/* let a = Number(prompt('Escribe un número'))
if(a % 11 === 0 && a % 5 === 0){
  console.log(`Se puede dividir por 11 y 5. Dividido por 11 da ${a/11} y dividido por 5 da ${a/5}`)
}
else {console.log(`No es divisible por 11 y 5`)} */

//// Crear un programa que le pida al usuario dos números en un Prompt y luego muestre en un alerta el número mayor.

/* let num1 = Number(prompt("Escribe un número"));

let num2 = Number(prompt("Escribe otro número"));

if(num1 > num2) {
  alert(num1)
}
else{alert(num2)}  */  


//// Crear un programa que le pida al usuario primero un número al usuario a través de un prompt y luego un segundo número para luego mostrar en un alerta el número mayor, esta vez realizar el ejercicio ocupando un if ternario.

/* let num1 = Number(prompt("Escribe un número"));

let num2 = Number(prompt("Escribe otro número"));

num1 > num2 ? alert(num1) : alert(num2) */

//// Crear un programa que determine si un string introducido por un usuario empieza con un número o con una letra.

/* let cadena = prompt('Escribe algo')

let primeraLetra = Number(cadena[0])

if(Number.isNaN(primeraLetra)){
  console.log('No empieza por un dígito')
}
else{console.log('Empieza por un dígito')} */

//// Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se determine si el triángulo es válido o no.

/* let a = Number(prompt('Primer ángulo'))

let b = Number(prompt('Segundo ángulo'))

let c = Number(prompt('Tercer ángulo'))

if(a + b > c){
  alert('Es válido')
}
else{alert('No es válido')} */

////Determinar si una palabra empieza con mayúscula o no.

/* let palabra = prompt('Dime algo')

let primeraLetra = palabra[0]

if(primeraLetra === primeraLetra.toUpperCase()){
  console.log('Empieza con mayúscula')
}
else {console.log('Está en minúscula')} */

//// Determinar si un año dado es bisiesto.

/* let year = Number(prompt('Ingresa el año'))

if(year % 4 === 0 && year % 100 !== 0){
  console.log('Es bisiesto')
}
else{console.log('No es bisiesto')} */

//// Escribir un programa JavaScript en el que el programa escoge al azar un entero entre 1 y 10, el usuario , luego a el usuario se le pedirá que introduzca un número en un popup para intentar adivinarlo. Si la entrada del usuario coincide con el número de conjetura, el programa mostrará un mensaje de "buen trabajo" de lo contrario mostrará un mensaje de "No corresponde"

/* let randomNumber = Math.floor(Math.random() * (10 - 1) + 1);
let guess = Number(prompt('Adivina el número'))

if(guess === randomNumber){
  console.log('Buen trabajo')
}
else{console.log('No corresponde')} */

//// El siguiente código tiene un error que se produce en algunos casos especiales, descubrirlo y arreglarlo:

////if(edad < 13) {
////  console.log("Es niño");
////}if(edad < 18 ){
////   console.log("Es adolecente");
////} else{
////   console.log("Es adolecente");
////}

/* let edad = Number(prompt('Ingresa tu edad'))

if(edad < 13) {
    console.log("Es niño");
}else if(edad >= 13 && edad < 18){
    console.log("Es adolescente");
} else{
    console.log("Es adulto"); 
}*/

//// Negar las siguientes expresión de forma de mantener la tabla de verdad, crear el programa que muestre el valor de la expresión a medida que se cambia los valores de a y b.

//// !a && !b
//// !a || !b

/* a = true
b = false


if(a && b){
  console.log(`a es ${a} y b es ${b}, entonces es verdadero`)
}
else if(a && !b){
  console.log(`a es ${a} y b es ${b}, entonces es falso`)
}
else if(!a && b){
  console.log(`a es ${a} y b es ${b}, entonces es falso`)
}
else{
  console.log(`a es ${a} y b es ${b}, entonces es falso`)
}

if(a || b) {
  console.log(`a es ${a} y b es ${b}, entonces es verdadero`)
}
else if(!a || !b) {
  console.log(`a es ${a} y b es ${b}, entonces es verdadero`)
}
else {console.log('Si uno de los dos es verdadero, devuelve ese')} */

////////// LOOPS

//// Mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo ingresa el usuario en un prompt.

/* let n = Number(prompt('Ingresa un número'))
let counter = 0

while (counter <= n) {
  console.log(counter)
  counter += 1
} */

////Mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo ingresa el usuario en un prompt.

/* let N = Number(prompt("Dime un número"))
let counter = 0

while(counter <= N) {
  console.log(counter)
  counter += 2
} */

////Mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo ingresa el usuario en un prompt.

/* let N = Number(prompt("Dime un número"))

while(N >= 1) {
  console.log(N)
  N -= 1
}  */

////Escribir utilizando console.log la tabla del 9 hasta 9x10
/* let counter = 1
while(counter <= 10 ){
  console.log(counter * 9)
  counter += 1
} */

////Pedir al usuario que ingrese un número en un prompt, hacer la suma de todos los dígitos, validar que el número ingresado no contenga letras.

/* let numero = Number(prompt('Ingresa un número'))
let counter = 0
let resultado = 0
if(Number.isNaN(numero)){
  console.log('No es un número')
}
else {
  while(counter <= numero){
    resultado += counter
    console.log(resultado)
    counter += 1
  }
} */

////Realizar la suma de todos los números pares entre N y M donde N y M los ingresa un usuario.

/* let N = Number(prompt('Ingresa un número'))
let M = Number(prompt('Ingresa otro número'))
let resultado = 0

while(N && M) {
  if(Number.isNaN(N) || Number.isNaN(N) ){
    console.log('No es un número')
    break
  }
  else {
    if(N % 2 === 0 && M % 2 === 0){
      let sum = N + M
      console.log(sum)
      resultado += sum
      N = Number(prompt('Ingresa un número'))
      M = Number(prompt('Ingresa otro número'))
    }
    else{
      console.log('No son pares')
      N = Number(prompt('Ingresa un número'))
      M = Number(prompt('Ingresa otro número'))
    }
    }
} */

////Realizar la sumatoria de los primeros N números, donde N es ingresado por el usuario.

/* let number = Number(prompt('Ingresa un número'))
let total = 0
if(Number.isNaN(number)){
  alert('No es un número')
}
else {
  while(number){
    console.log(number)
    total += number
    number = Number(prompt('Ingresa un número'))
  }
} */

////Realizar el factorial de los primeros N números

/* let number = Number(prompt('Ingresa un número'))
counter = 1

if(Number.isNaN(number)){
  alert('No es un número')
}
else {
  while(counter <= number ){
    console.log(counter * number)
    counter += 1
  }
} */

//// Encontrar todos los divisores de un número.

/* let number = 10
let divisores = []

for(let n = 0; n <= number; n++){
  if(number % n === 0){
    divisores.push(n)
  }
}

console.log(divisores) */

//// Determinar si un número ingresado por el usuario en un loop es primo o no, validar que el número ingresado sea mayor o igual a dos.

/* let number = 17

if(number >= 2){
  for(let n = 2; n <= number-1; n++){
    if(number % n === 0){ 
      console.log('No es primo')
      break
    }
    console.log('Es primo'); 
    break;
  }
} */

///// Crear un programa que determine si un número es perfecto o no, (se dice que un número es perfecto si el número es igual a sus divisores, ejemplos 6 = 1 + 2 + 3)

/* let number = 6
let divisores = 0

for(let n = 0; n <= number; n++){
  if(number % n === 0){
    divisores += n
  }
}

number === divisores- number ? console.log('Es perfecto') : console.log('No es perfecto') */

//// Generar los primeros N números primos, donde n es ingresado por el usuario.

/* let numero = Number(prompt('Ingresa un número'))
let primos = []

  for(let i=2; i < numero; i++){
    let esPrimo = true;

    for(let j= 2; j < i; j++){
      if(i % j == 0){esPrimo = false}
    }
    if(esPrimo){
      primos.push(i)
    }
  }

console.log(primos) */

//// Generar los primeros N números perfectos.

/* let numero = 28
let perfectos = []
for(let i = 0; i <= numero; i++ ){
  let divisores = 0
  for(let n = 1; n <= i; n++){
    if(i % n === 0){
      divisores += n
    }

    if(i === divisores - i){
      perfectos.push(i)
    }
  } 
}
console.log(perfectos) */

//////// PATRONES CON LOOPS ANIDADOS

////--> Dibujar los siguientes patrones ocupando document.write, para rellenar los espacios vacíos se debe imprimir un espacio vacío.

//--> Cuadrado lleno:

/* for(let i = 1; i <=5; i++){
  for(let j = 1; j <= 5; j++){
    document.write('<span>*</span>')
  }
  document.write('<br>')
} */

//--> Cuadrado hueco:

/* for(let i = 1; i <=5; i++){
  for(let j = 1; j <= 5; j++){
    if(i > 1 &&  i < 5){
      if(j > 1 && j < 5){
        document.write('<span>&nbsp;</span>')
      }
    else{document.write('<span>*</span>')}
    }
    else {document.write('<span>*</span>')}
    
  }
  document.write('<br>')
} */

// --> Tablero de Ajedrez:

/* for(let i = 1; i <= 8; i++){
  for(let j = 1; j <= 15; j++){
    if(i % 2 === 0){
      j % 2 === 0 ? document.write('<span>*</span>') : document.write('<span>&nbsp;</span>')
    }
    else {
      j % 2 === 0 ? document.write('<span>&nbsp;</span>') : document.write('<span>*</span>') 
    }
  }
  document.write('<br>')
} */

// --> Pirámide izquierda

/* let counter = 1
let char = '*'
while(counter <= 5){
  document.write(`<span>${char.repeat(counter)}</span>`)
  document.write('<br>')
  counter += 1
} */

// --> Pirámide centrada

/* let counter = 1
let plus2 = 1
let char = '*'
while(counter <= 5){
  document.write(`<span>${char.repeat(plus2)}</span>`)
  document.write('<br>')
  plus2 += 2
  counter += 1
}
 */

//--> Pirámide invertida

/* let counter = 5
let menos2 = 9
let char = '*'
while(counter >= 1){
  document.write(`<span>${char.repeat(menos2)}</span>`)
  document.write('<br>')
  menos2 -= 2
  counter += 1
} */

//--> Diamante

/* let counter = 1;
let char = '*'


for(let i = 1; i <= 9; i++){
  if(i < 5){
    document.write(`<span>${char.repeat(counter)}</span> <br>`)
    counter = counter + 2
  }
  
  if(i >= 5){
    document.write(`<span>${char.repeat(counter)}</span> <br>`)
    counter = counter - 2  
  }
} */

////////// FUNCIONES

//// Crear una función que reciba un valor cualquiera y lo muestre ocupando console.log(), llamar a la función pasando el valor 5

/* const mostrar = (valor) => {
  console.log(valor)
}

mostrar(5) */

//// La siguiente función devuelve undefined en lugar de la multiplicación, se pide arreglarla

// function multiply(a, b){
//  a * b
//}

/* function multiply(a,b){
  return a*b
}

console.log(multiply(2,5)) */

//// Crear una función que reciba dos valores y devuelva la suma de ellos.

/* const sumar = (a, b) => {
  return a + b
}

console.log(sumar(4,5)) */

//// Crear una función que reciba un número entero y muestre un error si el tipo de dato pasado es de otro tipo.

/* const esNumero = (num) => {
  if(Number.isInteger(num)){
    return 'Es un número'
  }
  else{ return 'Error: No es un número'}
}

console.log(esNumero(9.4)) */

//// Crear una función autoejecutable que muestre "muuu" en pantalla

/* function muu() {
  alert('muuu')
}

muu() */

/////////// ARRAY

////Dado el array = [1,2,3,4,5,6]

////Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.
////  Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.
////  Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos en pantalla.
////  Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
////  Generar una copia de un array pero con todos los elementos incrementado en 1.
////  Calcular el promedio

/* const array = [1,2,3,4,5,6] */

/* for(el of array){
  console.log(el)
}

array.forEach(el => {
  console.log(el)
}) */

/* for(el of array){
  console.log(el + 1)
}

const masUno = array.map(function(el){
  return el + 1
})

console.log(masUno) */

/* const sumaDeElementos = array.reduce((anterior, actual) => anterior + actual)
const cantidad = array.length

console.log(sumaDeElementos/cantidad) */

// Crear un array vacío, luego generar 20 números al azar y guardarlos en un array.

/* const array = []

for(let i = 0; i <= 20; i++){
  let azar = Math.floor(Math.random() * 50)
  array.push(azar)
}

console.log(array) */


//// Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es introducido por el usuario a través de un prompt.

/* let numeroAzar = Number(prompt('¿Cuántos números al azar querés?'))
const arrayAzar = []
for(let i = 0; i <= numeroAzar; i++){
  let azar = Math.floor(Math.random() * 100)
  arrayAzar.push(azar)
}

console.log(arrayAzar) */

// Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.

/* const colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"]

let elegido = prompt('Elegí un color')

const filtrado = colores.filter(color => color === elegido)

filtrado.length > 0 ? alert('Si está') : alert('No está') */

//// El usuario ingrese un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5])

/* let palabras = prompt('Escribí palabras separadas por coma')

const separado = palabras.split(',')

console.log(separado) */

//// Convertir un array ingresado dentro del código en un string (existe un método en javascript para hacerlo)

/* const arrayParaConvertir = ['El', 'gato', 'hace','miau']

const convertido = arrayParaConvertir.join(' ')

console.log(convertido) */

// ---> Unión, intersección y conteo

//// Existen dos arrays, cada uno con 5 palabras, generar un nuevo array con la intersección de ambos elementos. (Ejemplo: [1,2,3] unión [1,2,4] = [1,2]

/* const array1 = ['gato','perro','manzana','banana','mandarina']
const array2 = ['auto','gato','caja','libro','manzana']
const interseccion = []

for(palabra of array1){
  for(pal of array2) {
    if (pal === palabra) {
      interseccion.push(pal)
    }
  }
}

console.log(interseccion) */

//// Existen dos arrays, cada uno con 5 palabras, generar un nuevo array con la unión de ambos elementos, (Ejemplo: [1,2,3] unión [1,2,4] = [1,1,2,2,3,4]

/* const array1 = ['gato','perro','manzana','banana','mandarina']
const array2 = ['auto','gato','caja','libro','manzana']
const unido = [...array1, ...array2]

console.log(unido) */

////El usuario ingresa dos conjuntos de números separados por coma, el programa debe determinar si ambos conjuntos tienen la misma cantidad de números.

/* let opcion1 = prompt('Ingresa algunos números separados por coma').split(',')
let opcion2 = prompt('Ahora ingresa otros números').split(',')

opcion1.length === opcion2.length ? alert('Tienen la misma cantidad de números') : alert('No tienen la misma cantidad') */

//// El usuario ingresa dos conjuntos de números separados por coma, si ambos conjuntos tienen la misma cantidad de elementos mostrar un arreglo que contenga la suma de cada elemento. (Ejemplo: [1,2,3] + [2,3,4] = [3,5,7])

/* let opcion1 = prompt('Ingresa algunos números separados por coma').split(',')
let opcion2 = prompt('Ahora ingresa otros números').split(',')
const total = []

if(opcion1.length !== opcion2.length) {
  alert('Tienen distinta cantidad')
}
else {
  for(let i = 0; i < opcion1.length; i++){
    total.push(opcion1[i] + opcion2[i])
  }
}
console.log(total) */

///////////////////////// FILTRANDO DATOS EN ARREGLO 

//// Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con solo los números pares, hint: utilizar reduce()
/* 
const numerosPares = (array) => {
  const pares = array.filter(el => el % 2 === 0)
  return pares
}

console.log(numerosPares([6,9,8,3,4])) */

//// Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que contenga solo las palabras que empiezan con una vocal.
/* 
const palabrasVocales = (array) => {
  const vocales = ['a', 'e', 'i','o','u']
  const palabrasNuevas = []

  for(el of array){
    for(let i=0; i <= vocales.length; i++){
      if(el[0] === vocales[i]){
        palabrasNuevas.push(el)
      }
    }
  }
  return palabrasNuevas
}

console.log(palabrasVocales(['animal','hongo','caja','estatua','armadura'])) */

//////// ORDENAMIENTO

//// Crear un método que permite intercambiar las posiciones de dos elementos de un arreglo en base a sus índices ej:

////arr = [1,2,3]
////swap(arr, 0, 1)
////console.log(arr) // [2,1,3]

/* const arr = [1,2,3]

const swap = (array, i1, i2) => {
  let val = array[i1]
  let val2 = array[i2]

  arr[i2] = val
  arr[i1] = val2

  return array
}

console.log(swap(arr,0,1)) */

//// Realizar el mismo ejercicio anterior pero que en esta ocasión devuelva un arreglo nuevo con los datos cambiados.

/* const arr = [1,2,3]

const swap = (array, i1, i2) => {
  const newArr = Array.from(arr)
  let val = array[i1]
  let val2 = array[i2]


  newArr[i2] = val
  newArr[i1] = val2

  return newArr
}

console.log(swap(arr,0,1)) */

//// Crear una función que reciba un arreglo y que cree uno nuevo con todos los elementos ordenados de menor a mayor, (sin ocupar el método .sort)

/* const array = [4,7,5,9,1,3]

const ordenar = (arr) => {
  const newArr = Array.from(arr)
  for (let i = 1; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
        let temp = newArr[i];
        if (newArr[i] < newArr[j]) {
          newArr[i] = newArr[j];
          newArr[j] = temp;
        }
    }
}
return newArr;
}

console.log(ordenar(array)) */

//// Crear una función que reciba un arreglo y que cree uno nuevo con todos los elementos ordenados de mayor a menor.

/* const array = [4,7,5,9,1,3]

const ordenar = (arr) => {
  const newArr = Array.from(arr)
  for (let i = 1; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
        let temp = newArr[i];
        if (newArr[i] > newArr[j]) {
          newArr[i] = newArr[j];
          newArr[j] = temp;
        }
    }
}
return newArr;
}

console.log(ordenar(array))  */

////////// ARREGLOS DE ARREGLOS

//// Crear una función que permite aplanar un arreglo dado, Ejemplo:

////var arr = [[1,2,3],[4,5,6],[7,8,9]];
////console.log(aplanar(arr)); // [1,2,3,4,5,6,7,8,9]

/* var arr = [[1,2,3],[4,5,6],[7,8,9]];
let string = ''
const aplanar = (array) => {
  for(el of array){
    string = string + ',' + el.join(',') 
  }

array.splice(0,array.length)
array.push(...string.split(','))
array.shift(array[0])
return array
}

console.log(aplanar(arr)) */

//// Crear una función que divida un arreglo en dos partes con la misma cantidad de elementos (o una diferencia de máximo un elemento) y devuelva un arreglo que contenga al grupo1 y al grupo2

//var arr = [1,2,3,4,5,6,7,8];
//console.log(split(arr)); // [[1,2,3,4], [5,6,7,8]]

/* const arr = [1,2,3,4,5,6,7,8];

const dividir = (array) => {
  let mitad = Math.floor(array.length / 2)
  const grupo1 = []
  const grupo2 = []
  const total = []
  for(let i=0; i<array.length; i++){
    if(i < mitad){
      grupo1.push(array[i])
    }
    else {grupo2.push(array[i])}
  }
  total.push(grupo1,grupo2)
  return total
}

console.log(dividir(arr)) */

/////////////// MATRICES

//// Recorrer un arreglo de arreglos para mostrarlo como una matriz, ejemplo [[1,1],[2,2]] se mostraría de la siguiente forma:

/* const matriz = [[1,1],[2,2]];

for(m of matriz){
  console.log(m)
} */

//// Sumar [[1,1],[2,2]] con [[3,1],[3,2]].

/* const matriz1 = [[1,1],[2,2]]
const matriz2 = [[3,1],[3,2]]


for(m of matriz1){
  for(let i=0; i<m.length;i++){
    m[i] += matriz2[matriz1.indexOf(m)][i]
  }
  
}
console.log(matriz1) */

//// Contar la cantidad de elementos dentro de una matriz.

/* const matriz = [[1,1],[2,2]]
let counter = 0

for(m of matriz){
  counter += m.length
}
console.log(counter) */

//// Multiplicar una matriz por un escalar, si la matriz inicial es [[1,2,3],[4,5,6]], al multiplicarla por dos deberíamos obtener [[2,4,6],[8,10,12]].

/* const matriz = [[1,2,3],[4,5,6]]

for(m of matriz){
  for(let i=0; i<m.length;i++){
    m[i] = m[i]*2
  }
  
}
console.log(matriz) */

////Encontrar el número mayor en una matriz.

/* const matriz = [[1,2,3],[4,5,6]]
let temp = 0
for(m of matriz){
  for(let i=0; i<m.length;i++){
    if(m[i] > temp){
      temp = m[i]
    }
  }
}
console.log(temp) */

//// Determinar si un determinado número se encuentra dentro de una matriz o no.

/* const matriz = [[1,2,3],[4,5,6]]
let numero = 4

for(m of matriz){
  for(let i=0; i<m.length;i++){
    if(m[i] === numero){
      console.log('Está')
    }
  }
} */

//// Devolver la suma de todos los elementos en la diagonal de la matriz.

/* const matriz = [[1,2,3],[4,5,6],[7,8,9]]
let total = 0

for(m of matriz){
  for(let i=0; i<m.length;i++){
    total += m[i]
  }
}
console.log(total) */


//// Mostrar la transpuesta de una matriz, o sea dado: [[1,2,3],[4,5,6],[7,8,9]] Debería quedar como: [[1,4,7],[2,5,8],[3,6,9]]


