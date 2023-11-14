
///1-

// obtenerIndice(valor, array)
// Crear una función obtenerIndice que tome como argumento un valor cualquiera valor y un array cualquiera array y devuelva el índice del primer ítem con dicho valor en el array, o -1 si no hay ninguno.

// obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12]) // 2
// obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12]) // -1

//const arr = [5, 7, 12, 34, 54, 2, 12]

//const numero = 12

//const numero = 83

// const numero = 104

// const obtenerIndice = (numero, arr) =>{

//         if(arr.includes(numero)){
//             return arr.indexOf(numero)
//         } else if (!arr.includes(numero)) {
//             return -1
//         }

//     }


// console.log(obtenerIndice(numero, arr))

//2-

// repetir(valor, cantidad)
// Crear una función repetir que tome como argumento un valor valor y un número entero cantidad, y devuelva una array con valor repetido cantidad de veces.

// repetir('lovelace', 3) // ['lovelace', 'lovelace', 'lovelace']
// repetir('a', 5) // ['a', 'a', 'a', 'a', 'a']
// repetir('html', 0) // []

// const valor = ["lovelace"]

// const cantidad = 3



//  const repetir = (valor, cantidad) => {
//     const resultado = []
//     for (let i=0; i< cantidad; i++){
//         resultado.push(...valor)
//     }
//     return resultado
//  }

// console.log(repetir(valor, cantidad))

//3-
// sumarImparesHasta(numero)
// Crear una función sumarImparesHasta que tome como argumento un número numero y que devuelva la suma de todos los impares empezando desde 0 hasta dicho numero inclusive.

// sumarImparesHasta(5) // 9 (1 + 3 + 5 = 9)
// sumarImparesHasta(13) // 49
// sumarImparesHasta(47) // 576

// const valor = 5

// const sumarImparesHasta = (valor) =>{
//     let acc = 0 
//     for (let i = 0; i <= valor; i++) {
//         if (i % 2 !==0){
//            acc +=i
//         }
    
//     }
//     return acc
// }

// console.log(sumarImparesHasta(valor))

//4-
// crearCuentaRegresiva(numeroInicial)
// Crear una función crearCuentaRegresiva que tome como argumento un número entero numeroInicial y que devuelva un array con cuyo primer ítem sea numeroInicial y los demás ítems sean números enteros sucesivos descendientes, hasta llegar a 0.

// crearCuentaRegresiva(3) // [3, 2, 1, 0]
// crearCuentaRegresiva(5) // [5, 4, 3, 2, 1, 0]

// const crearCuentaRegresiva = (numeroInicial) => {
//     const array = []
//     for (let i = numeroInicial ; i >= 0; i--) {
//         if(i <= numeroInicial){
//             array.push(i)
//         }
        
//     }
//    return array
// }

// console.log(crearCuentaRegresiva(5))

//5-
// invertir(array)
// Crear una función invertir que tome como argumento un array array y que devuelva un array con los mismos valores pero en orden invertido.

// invertir([1, 2, 3]) // [3, 2, 1]
// invertir([5, 7, 99, 34, 54, 2, 12]) // [12, 2, 54, 34, 99, 7, 5]

// const array =[ 5, 7, 99, 34, 54, 2, 12];

// const invertir = (array) =>{
//     const arrayInvertido = [];

//     for (let i = (array.length-1); i >= 0; i--){
//         arrayInvertido.push(array[i]);

//         console.log(arrayInvertido);
//     }

//     return arrayInvertido;


// }

// console.log (invertir(array));

//6-

// removerDuplicados(array)
// Crear una función removerDuplicados que tome como argumento un array array y que devuelva un array con los mismos valores de array pero sin valores duplicados.

// removerDuplicados([1, 1, 1]) // [1]
// removerDuplicados([1, 1, 2, 2, 3, 3]) // [1, 2 ,3]
// removerDuplicados([5, 23, 8, 5, 5, 44, 23]) // [5, 23 ,8, 44]

//const array = [1, 1, 1]

// const array = [1, 1, 2, 2, 3, 3]

// //const array = [5, 23, 8, 5, 5, 44, 23]

// const removerDuplicados = (array) =>{
//     const sinDuplicados = []
//     for (let i = 0; i < array.length; i++) {
//         if(sinDuplicados.indexOf(array[i]) === -1){
//             sinDuplicados.push(array[i])
//         }
        
//     }
//     return sinDuplicados
// }

// console.log(removerDuplicados(array))

//7-

// repetirLetras(palabra, cantidad)
// Crear una función repetirLetras que tome como argumento un string palabra y un número entero cantidad, y devuelva una string donde cada letra de palabra esté repetida cantidad de veces.

// repetirLetras('hola', 2) // 'hhoollaa'
// repetirLetras('ada', 3) // 'aaadddaaa'
// repetirLetras('ah!', 5) // 'aaaaahhhhh!!!!!'
// repetirLetras('basta', 1) // 'basta'


//  const palabra = "hola"

//  const cantidad = 2



//   const repetirLetras = (palabra, cantidad) => {
//      let resultado = ""
//      for (let i=0; i< palabra.length; i++){
//         const letra = palabra[i]
//        resultado += letra.repeat(cantidad)
// }
//     return resultado
//   }

//  console.log(repetirLetras(palabra, cantidad))

//////////////////////////////////nro 8 no salio////////////////////////////////////////

//8-
// capitalizarPalabras(string)
// Crear una función capitalizarPalabras tome como argumento un string string y devuelva un string donde cada palabra está capitalizada (con la primera letra ma´yuscula). Dejar las demás letras como están.

// capitalizarPalabras('Esto es un título') // 'Esto Es Un Título'
// capitalizarPalabras('había una vez') // 'Había Una Vez'
// makeTitle('OMG') // 'OMG'

// const cadena = "habia una vez"

// // const capitalizarPalabras = (cadena) => {
// //      const palabras = cadena.split("")
// //        for (let i=0; i< palabras.length; i++){        
// //         //palabrin[i] = palabrin[i].charAt(0).toUpperCase() + palabrin[i].slice(1).toLowerCase()       
// //         const primeraLetra = palabras[i].charAt(0).toUpperCase() 
// //        const restoPalabra = palabras[i].slice(1).toLowerCase()
// //         palabras[i] = primeraLetra + restoPalabra
// //   }
// //      return palabras.join("")
// //     }
  
// //    console.log(capitalizarPalabras(cadena))

// const capilizarPalabras = (cadena) =>{
    
//     const letraMayuscula = cadena.charAt(0).toUpperCase();
//     const palabraGenerada = cadena.slice(1, 0) + letraMayuscula + cadena.slice(0+1, cadena.length);

//     return palabraGenerada;
// };

// console.log(capilizarPalabras(cadena))

//9-

// sumarSeccion(array, comienzo, cantidad)
// Crear una función sumarSeccion que tome como argumento un array de números enteros array, un número entero comienzo y un número entero cantidad, y que devuelva la suma de cantidad de números de array empezando a contar desde el ítem con índice comienzo.

// sumarSeccion([2, 2, 4, 3, 10, 20, 5], 0, 3) // 8 (2 + 2 + 4 = 8)
// sumarSeccion([2, 2, 4, 3, 10, 20, 5], 2, 4) // 37 (4 + 8 + 10 + 20 = 37)
// sumarSeccion([2, 2, 4, 3, 10, 20, 5], 4, 1) // 3

// const array = [2, 2, 4, 3, 10, 20, 5]

// const comienzo = [0]

// const cantidad = [3]

// const sumarSeccion = (array, comienzo, cantidad) =>{
//     let resultado = 0
//     for (let i = comienzo; i < cantidad; i++) {

//         resultado += array[i]
    
//     }
//     return resultado
// }

// console.log(sumarSeccion(array, comienzo, cantidad))

//10-

// esSubconjunto(subconjunto, conjunto)
// Crear una función esSubconjunto que tome como argumento dos arrays, subconjunto y conjunto, y devuelva true si subconjunto es realmente subconjunto de conjunto, es decir, si todos los valores de subconjunto están en conjunto.

// esSubconjunto([1], [1, 2, 3]) // true
// esSubconjunto([1, 2, 3], [1, 2, 3, 4, 5]) // true
// esSubconjunto([27, 49, 54], [54, 27, 8, 27, 49]) // true
// esSubconjunto([1, 2, 3], [1, 2]) // false
// esSubconjunto([1], [2, 3, 4]) // false

//const subConjunto = [1, 2, 3]
//const conjunto = [1, 2, 3, 4, 5]

//const subConjunto = [1]
//const conjunto = [2, 3, 4]

// const subConjunto = [27, 49, 54]
// const conjunto = [54, 27, 8, 27, 49]

//const subConjunto = [1, 2, 3]
//const conjunto = [1, 2]
// const esSubconjunto = (subConjunto, conjunto) => {
   
//     for (let i = 0; i < subConjunto.length; i++) {
//      if(!conjunto.includes(subConjunto[i])) {
//         return false
//     } else {
//        return true
//     } 
//     }   
// }

// console.log(esSubconjunto(subConjunto, conjunto))

//sin negar if

// const esSubconjunto = (subConjunto, conjunto) => {
   
//          for (let i = 0; i < subConjunto.length; i++) {
//           if(conjunto.includes(subConjunto[i]) === false) {
//              return false
//          } else {
//            return true
//          } 
//         }   
//      }
//      console.log(esSubconjunto(subConjunto, conjunto))

//11-

// tieneBloque(array)
// Crear una función hayBloque que tome como argumento un array array y devuelva true si dicho array tiene un bloque de 3 o más ítems consecutivos idénticos, o false si no tiene.

// tieneBloque([1, 2, 3]) // false
// tieneBloque([1, 1, 1, 2, 3]) // true
// tieneBloque([1, 2, 3, 3, 3]) // true
// tieneBloque([1, 2, 3, 3, 3, 8]) // true
// tieneBloque([1, 2, 2, 3, 3, 4]) // false

//const arr = [1, 2, 2, 3, 3, 4]

//const arr = [1, 2, 3, 3, 3, 8]

// const tieneBloque = (arr) =>{
//     for (let i = 0; i <= arr.length -3; i++) {
//         if(arr[i] === arr[i+1] && arr[i] === arr[i+2]){
//             return true
//         }
//     }
//     return false
// }

// console.log(tieneBloque(arr))

//12-

// esPalindromo(palabra)
// Crear una función esPalindromo que tenga como par´ámetro un string palabra y devuelva true si dicha palabra es palíndroma, es decir, si puede leerse de igual manera de izquierda a derecha que de derecha a izquierda, o false sino.

// esPalindromo('ada') // true
// esPalindromo('reconocer') // true
// esPalindromo('mama') // false
// esPalindromo('javascript') // false
// BONUS: hacer que funcione con oraciones y no con palabras. Ejemplos.

//expresion regular para quitar espacios???? = /\s/g,""

//const oracion = "A luna ese anula"

//const oracion = "tres tristes tigres trigan en un trigal"

// const esPalindromo = (oracion) => {
//     const oracionSinEspacio = oracion.toLowerCase().replace(/\s/g,"")

//     for (let i = 0; i < oracion.length; i++) {
//         if(oracionSinEspacio[i] !== oracionSinEspacio[oracionSinEspacio.length -1 -i]){
//             return false
//         }
        
//     }
//     return true
// }

// console.log(esPalindromo(oracion))


