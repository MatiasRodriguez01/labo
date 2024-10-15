"use strict";
// conche --- Ejercicio 1
let coche = {
    marca: "Toyota",
    modelo: "Etios",
    velocidad: 0,
    estado: false,
    acelerar() {
        this.estado = true;
        this.velocidad += 20;
    },
    frenar() {
        this.estado = false;
        if (this.velocidad <= 0) {
            this.velocidad = 0;
        }
        else {
            this.velocidad /= 2;
            console.log(`El auto Freno `);
        }
    },
    mostrarEstado() {
        if (this.velocidad === 0) {
            console.log("El auto No esta en movimiento");
        }
        else {
            if (this.estado) {
                console.log(`El auto esta Acelerando y va a ${this.velocidad} km!`);
            }
            else {
                console.log(`El auto Freno!! Y va a ${this.velocidad} km.`);
            }
        }
    }
};
coche.mostrarEstado();
coche.acelerar();
coche.mostrarEstado();
coche.frenar();
coche.mostrarEstado();
coche.acelerar();
coche.mostrarEstado();
// Ejercicio 2
const getDataTitles = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => {
        const paseData = data.filter((tarea) => tarea.completed === true);
        console.log(paseData);
    });
};
getDataTitles();
class Cubo {
    constructor(areaMovimientoId, cuboId, velocidad) {
        this.areaMovimientoElement = document.getElementById(areaMovimientoId);
        this.cuboElement = document.getElementById(cuboId);
        this.velocidadDeMovimiento = velocidad;
    }
    moverArriba() {
        const top = this.cuboElement.offsetTop;
        if (top > 0) {
            this.cuboElement.style.top = `${top - this.velocidadDeMovimiento}px`;
        }
    }
    moverAbajo() {
        const top = this.cuboElement.offsetTop;
        const contenedorHeight = this.areaMovimientoElement.clientHeight;
        const cuboHeight = this.cuboElement.clientHeight;
        if (top < contenedorHeight - cuboHeight) {
            this.cuboElement.style.top = `${top + this.velocidadDeMovimiento}px`;
        }
    }
    moverIzquierda() {
        const left = this.cuboElement.offsetLeft;
        if (left > 0) {
            this.cuboElement.style.left = `${left - this.velocidadDeMovimiento}px`;
        }
    }
    moverDerecha() {
        const left = this.cuboElement.offsetLeft;
        const contenedorWidth = this.areaMovimientoElement.clientWidth;
        const cuboWidth = this.cuboElement.clientWidth;
        if (left < contenedorWidth - cuboWidth) {
            this.cuboElement.style.left = `${left + this.velocidadDeMovimiento}px`;
        }
    }
    mover(event) {
        switch (event.key) {
            case 'ArrowUp':
                this.moverArriba();
                break;
            case 'ArrowDown':
                this.moverAbajo();
                break;
            case 'ArrowLeft':
                this.moverIzquierda();
                break;
            case 'ArrowRight':
                this.moverDerecha();
                break;
        }
    }
}
// Instanciar la clase Cubo
const cubo = new Cubo('contenedor', 'cubo', 10);
// Escuchar el evento keydown
document.addEventListener('keydown', (event) => cubo.mover(event));
