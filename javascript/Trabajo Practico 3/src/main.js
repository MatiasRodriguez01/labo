/*
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

*/

console.log("1. INTRODUCCION A JAVASCRIPT:")
console.log("Ejercicio 2:")
let a = 5;
let b = 10;
let c = a + b;
console.log("La suma de a y b es: " + c)

console.log("Ejercicio 2:")
let nombre = prompt("¿Cual es tu nombre?")
console.log("Hola, " + nombre + "!")

console.log("2. OPERADORES LOGICOS Y CONDICIONALES:")
console.log("Ejercicio 1:")
a = 13;
b = 14;
c = 16;

if (a > b && a > c){
    console.log("El mayor de los tres numeros es: " + a);
} else if (b > a && b > c){
    console.log("El mayor de los tres numeros es: " + b);
} else {
    console.log("El mayor de los tres numeros es: " + c);
}

console.log("Ejercicio 2:");
let numeroIngresado = prompt("Ingresa un numero y te dire si es par o impar: ");
if (numeroIngresado % 2 == 0){
    console.log("El numero " + numeroIngresado + " es par.");
} else {
    console.log("El numero " + numeroIngresado + " es impar.");
}

console.log("3. Operadores de asignacion y bucles")
console.log("Ejercicio 1:");
let numero = 10;
while(numero > 0){
    console.log(numero);
    numero -= 1;
}

console.log("Ejercicio 2:");
let numeroDoWhile;
do{
    numeroDoWhile = prompt("Ingresa un numero mayor a 100: ");
} while (numeroDoWhile <= 100);
console.log("Ingresaste un numero mayor a 100: " + numeroDoWhile);

console.log("4. FUNCIONES DE JAVASCRIPT")
console.log("Ejercicio 1:")

function esPar(numero){
    return (numero % 2 == 0);
}

console.log("El numero 8 es par: " + esPar(8));
console.log("El numero 7 es par: " + esPar(7));

console.log("Ejercicio 2:");

function convertirCelsiusAFahrenheit(c){
    return (c * 1.8 + 32);
}

let gradosCelcius = prompt("Ingrese los grados Celcius: ");
let gradosFahrenheit = convertirCelsiusAFahrenheit(gradosCelcius);

console.log(gradosCelcius + "°C son equivalentes a " + gradosFahrenheit + "°F");

console.log("5. OBJETOS EN JAVASCRIPT")
console.log("Ejercicio 1:")
let Persona = {
    nombre: "Matias",
    edad: "30",
    ciudad: "Mendoza",
    cambiarCiudad() {
        let nuevaCiudad = prompt("Ingrese su nueva ciudad: ", "");
        if (nuevaCiudad === null || nuevaCiudad === ""){
            console.log("Cambio cancelado!");
        } else {
            console.log("Se Cambio la ciudad!");
            this.ciudad = nuevaCiudad;
        }
    }
}
console.log("Persona: " + Persona.nombre + ", Edad: " + Persona.edad + ", Ciudad: " + Persona.ciudad);
Persona.cambiarCiudad();
console.log("Persona: " + Persona.nombre + ", Edad: " + Persona.edad + ", Ciudad: " + Persona.ciudad);

console.log("Ejercicio 2:")
let Libro1 = {
    titulo: "Harry Potter y la piedra filosofa",
    autor: "J.K Rowling",
    año: 27,
    esAntiguo() {
        return this.año > 10;
    }
}

let Libro2 = {
    titulo: "The Midnight Lybrary",
    autor: "Matt Haig",
    año: 4,
    esAntiguo() {
        return this.año > 10;
    }
}

console.log("El libro 1 " + Libro1.titulo + " es antiguo: " + Libro1.esAntiguo());
console.log("El libro 2 " + Libro2.titulo + " es antiguo: " + Libro2.esAntiguo());

console.log("6. ARRAYS");
console.log("Ejercicio 1:");
let numeros = [1,2,3,4,5,6,7,8,9,10];
console.log("numeros originales: " + numeros);

let numerosDuplicados = numeros.map(numeros => numeros * 2);
// for(let i = 0; i < 10; i++){
//     numerosDuplicados.push(numeros[i]*2);
// }
console.log("Numeros mutiplicados por 2: " + numerosDuplicados);

console.log("Ejercicio 2:");
let numerosPares = [];
for (let i = 1; i <= 20; i++){
    if (i % 2 == 0){numerosPares.push(i);}
}
console.log("Primeros 10 numeros pares: " + numerosPares)

console.log("7. INTRODUCCION AL DOM")
console.log("Ejercicio 1:")
const p = document.getElementsByTagName("p");
console.log(p)

const buttom_p = document.getElementById("buttom_p")
console.log(buttom_p)

let nuevoTexto= "";
const cambiarColor = () => {
    for (let i = 0; i < p.length; i++){
        if (p[i].classList.contains("blueP")){
            p[i].classList.remove("blueP");
            nuevoTexto = "Cambiar color Azul"
            buttom_p.textContent = nuevoTexto;
        } else {
            p[i].classList.add("blueP");
            nuevoTexto = "Cambiar color Negro"
            buttom_p.textContent = nuevoTexto;
        }
    }
}

buttom_p.addEventListener("click", () => {
    console.log("cambiamos de color:");
    cambiarColor();
})


console.log("Ejercicio 2:")

const input_Text = document.getElementById("input_Text");
console.log(input_Text);
const buttom_text = document.getElementById("buttom_text");
console.log(buttom_text);

const mostrarAlerta = () => {
    const alerta = input_Text.value;
    if (alerta === ""){
        alert("No tiene nada!!")
    } else {
        alert("Haz ingresado: " + alerta)
    }
}

buttom_text.addEventListener("click", () => {
    mostrarAlerta();
})


console.log("8. EVENTO DOM")
console.log("Ejercicio 1:")

const li = document.getElementsByTagName("li");
console.log(li);

const clickElement = () => {
    for(let i = 0; i < li.length; i++){
        li[i].addEventListener("click", () => {
            console.log(li[i].textContent)
        })
    }
}

clickElement();

/*
const clickElement = () => {
    for(let i = 0; i < li.length; i++){
        li[i].addEventListener("click", () => {
            if (li[i].classList.contains("click")){
            console.log(li[i].textContent)
            }
        })
    }
}
*/

console.log("Ejercicio 2:")
const input = document.getElementById("input");
console.log(input);
const campoDes = document.getElementById("campoDes");
console.log(campoDes);
const campoHab = document.getElementById("campoHab");
console.log(campoHab);

//input.disabled = true; // desabilitar campo (disabled)

campoDes.addEventListener("click", () => {
    input.disabled = true;
})

campoHab.addEventListener("click", () => {
    input.disabled = false;
})


console.log("9. LOCALSTORAGE")
console.log("Ejercicio 1:")
const inputEmail = document.getElementById("inputEmail");
console.log(inputEmail);
const buttomSaveEmail = document.getElementById("buttomSaveEmail");
console.log(buttomSaveEmail);
const emailSaved = document.getElementById("emailSaved");
console.log(emailSaved)
const buttomDeleteEmail = document.getElementById("buttomDeleteEmail");
console.log(buttomDeleteEmail)


const saveEmail = () => {
    const email = inputEmail.value;
    localStorage.setItem("email", email)
    emailSaved.textContent = email;
}

const deleteEmail = () => {
    localStorage.removeItem("email")
    emailSaved.textContent = "No hay Email guardado";
}

buttomSaveEmail.addEventListener("click", () => {
    saveEmail();
    const resul = localStorage.getItem("email");
    if (resul) {
        console.log("Email Guardado: " + true);
    } else {
        console.log("Email Guardado: " + false);
    }
})

buttomDeleteEmail.addEventListener("click", () => {
    deleteEmail();
    const resul = localStorage.getItem("email");
    if (!resul) {
        console.log("Email eliminado: " + true);
    } else {
        console.log("Email eliminado: " + false);
    }
})
