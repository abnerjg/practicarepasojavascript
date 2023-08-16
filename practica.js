//Declara una variable llamada miRefran
let miRefran;

//En otra linea, asigna un refran a esa varibale
miRefran = "la vida es un regalo";

//Declara una variable llamada longitud refrán y asignale a esa variable la cantidad de letras de miRefrán
let longitudRefran = (miRefran.length);

//En otra línea asigna a la variable novenaLetra el valor de la novena letra del refrán.
let novenaLetra = miRefran [8]; 
//Las posiciones en javascript comienzan en 0

//En otra línea asigna a la variable ultimaLetra el valor de la última letra del refrán.
let ultimaLetra = miRefran[longitudRefran-1];
//Para acceder a la ultima letra, restamos 1 a la longitud

//Busca el índice de la cadena “que” en tu refrán y asignalo a la variable índicePalabra.
let indicePalabra = miRefran.indexOf("en tu");
// Si el índice es menor que cero busca cualquier otra preposición hasta que sea mayor a 0
if (indicePalabra <0){
    indicePalabra = miRefran.indexOf ("otra");
}
//Reemplaza la preposición encontrada por la cadena “xxx”
if (indicePalabra>=0){
    miRefran = miRefran.substring (0, indicePalabra) + "''xxx''" + miRefran.substring (indicePalabra+5);
}
//Convierte a mayúsculas todos los caracteres de tu refrán.
miRefran = miRefran.toLocaleUpperCase ();

//un poco dificil de entender pero animos

console.log ("miRefran:", miRefran);
console.log ("longitudRefran:", longitudRefran);
console.log ("novenaLetra:", novenaLetra);
console.log ("ultimaLetra", ultimaLetra);
console.log ("indicePalabra:", indicePalabra);