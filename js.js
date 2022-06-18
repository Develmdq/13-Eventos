const nombre = "Eduardo";
const apellido = "Marcet";
const estudiante = nombre.concat(" ").concat(apellido);
const estudianteMayus = estudiante.toUpperCase();
const estudianteMinus = estudiante.toLowerCase();
const estudianteLength = estudiante.length;
const primerLetra = nombre[0];
const ultimaLetra = apellido[apellido.length - 1];
const sinEspacios = estudiante.replace(" ", "");
const nombreContenido = estudiante.includes(nombre);

console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(estudianteLength);
console.log(primerLetra);
console.log(ultimaLetra);
console.log(sinEspacios);
console.log(nombreContenido);
