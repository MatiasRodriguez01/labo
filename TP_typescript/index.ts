console.log("Ejercicio 2 - corriendo desde typescript");

// Ejercicio 3
const text: string = 'hola, TypeScript!!';
const number: number = 123;
const boolean: boolean = true;
const date: Date = new Date(2024, 9, 8);

const idText = document.getElementById('text');
const idNumber = document.getElementById('number');
const idBoolean = document.getElementById('boolean');
const idTime = document.getElementById('time');

console.log("Ejercicio 3:")
console.log(idText);
console.log(idNumber);
console.log(idBoolean);
console.log(idTime);

if (idText) idText.textContent = 'Texto: ' + (text);
if (idNumber) idNumber.textContent = 'Numero: ' + (number);
if (idBoolean) idBoolean.textContent = 'Booleano: ' + (boolean);
if (idTime) {
    const timeDate = (`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`);
    idTime.textContent = 'Fecha: ' + timeDate;
}

//Ejercicio 4
function converString(number: number){
    return String(number);
}

const idCadString = document.getElementById('cadString');
if (idCadString) idCadString.textContent = `Numero convertido a cadena: ${converString(456)}`;

console.log(`Ejercicio 4 - Numero convertido a cadena: ${converString(456)}`)
console.log(idCadString)

// Ejercicio 5
function sumArray(numbers:number[]){
    let sum: number = 0;
    numbers.forEach(element => sum += element);
    return sum;
}

let numbers: number[] = [1, 5, 6, 3];
const idSum = document.getElementById('sum')
if (idSum) idSum.textContent = `Suma del array: ${sumArray(numbers)}`

console.log(`Ejercicio 5 - Suma del array: ${sumArray(numbers)}`)
console.log(idSum)

// Ejercicio 6
let study = {
    name: 'Matias',
    age: 20,
    course: 'Programacion III'
}

const idName = document.getElementById('name');
const idAge = document.getElementById('age');
const idCourse = document.getElementById('course');

if (idName) idName.textContent = `Estudiante: ${study.name}`
if (idAge) idAge.textContent = `Edad: ${study.age}`
if (idCourse) idCourse.textContent = `Curso: ${study.course}`

console.log("Ejercicio 6:")
console.log(idName)
console.log(idAge)
console.log(idCourse)
console.log(study)


// Ejercicio 7
type Direction = {
    street: String,
    city: String,
    cp: number
}

let direction: Direction = {
    street: "Av. San Martin",
    city: "Mendoza",
    cp: 5698
} 


const idDirection = document.getElementById('direction');

if(idDirection) idDirection.textContent = `Direccion: calle: ${direction.street}, ciudad: ${direction.city}, CP: ${direction.cp}`

console.log("Ejercicio 7:")
console.log(idDirection)
console.log(direction)


// Ejercicio 8
interface inter {
    name: String,
    email: String,
    saludar(): String;
}

let person: inter = {
    name: 'Matias',
    email: 'matiasrodriguez@gmail.com',
    saludar: function (): string {
        return (`Hola, mi nombre es ${this.name}`);
    }
}

const idInterface = document.getElementById('interface');
let saludo: String = person.saludar();

if (idInterface) idInterface.textContent = `${person.saludar()} `;

console.log("Ejercicio 8:")
console.log(idInterface)
console.log(person)


// Ejercicio 9:
class Persona {
    name: string;
    age: number;
    
    constructor(name: string, age: number){
        this.name = name;
        this.age = age
    }

    mostrarDatos(): string{
        return (`Hola, mi nombre es ${this.name} y tengo ${this.age} años.`)
    }
}

const persona = new Persona('Matias', 20);

const idClass = document.getElementById('class')
if (idClass) idClass.textContent = `${persona.mostrarDatos()}`;
 
console.log("Ejercicio 9")
console.log(idClass)
console.log(persona)


// Ejercicio 10
class Caja <T> {
    value?: T;

    constructor(value: T){
        this.value = value
    }

    mostrar() {
        if(typeof this.value === "number") return `Contenido de cajaDeNumero: ${this.value}`;
        if(typeof this.value === "string") return `Contenido de cajaDeTexto: ${this.value}`;
        
    }
}

const caja1 = new Caja<number>(42);
const caja2 = new Caja<string>('Mensaje Secreto');

const idValueString = document.getElementById('valueString')
const idValueNumber = document.getElementById('valueNumber')

if(idValueString) idValueString.textContent = `${caja1.mostrar()}`;
if(idValueNumber) idValueNumber.textContent = `${caja2.mostrar()}`;

console.log("Ejercicio 10");
console.log(idValueString);
console.log(idValueNumber);
console.log(caja1);
console.log(caja2);


// Ejercicio 11;

function identidad<T>(value: T){
    if (typeof value === "number") return `identidad del numero: ${value}`;
    if (typeof value === "string") return `identidad del texto: ${value}`;
}

const idIdentityNumber = document.getElementById('identityNumber');
const idIdentityString = document.getElementById('identityString');

if (idIdentityNumber) idIdentityNumber.textContent = `${identidad(123)}`;
if (idIdentityString) idIdentityString.textContent = `${identidad("hola")}`;

console.log("Ejercicio 11");
console.log(idIdentityNumber);
console.log(idIdentityString);


// Ejercicio 12
enum Color {
    Azul, 
    Morado,
    Rojo
}

const color: Color = Color.Morado;

const enumColor = document.getElementById('enum');

if (enumColor) enumColor.textContent = `Color Favorito: ${Color[color]}`

console.log("Ejercicio 12")
console.log(enumColor)