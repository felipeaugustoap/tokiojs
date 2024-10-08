const container = document.querySelector("#container")

const btnAnadirPersona = document.getElementById("anadirPersona")
const btnMostrar = document.getElementById("mostrarPersona")




let personas = []

class Persona {
    constructor(nombre,apellidos,edad) {
        this.nombre = nombre,
        this.apellidos = apellidos,
        this.edad = edad
    }

    
}

function addPersona() {
    while (personas.length <5) {
        let nombre = prompt("Indique su nombre")
        let apellidos = prompt("Indique sus apellidos")
        let edad = prompt("Indique su edad")
        personas.push(new Persona(nombre, apellidos, edad))
    }
    
}

function mostrar() {


    const tabla = document.createElement("table")
    container.appendChild(tabla)

    const titulo = document.createElement("tr")
    const titulo1 = document.createElement("th")
    const textoTitulo1 = document.createTextNode("Nombre")
    titulo1.appendChild(textoTitulo1)
    titulo.appendChild(titulo1)

    const titulo2 = document.createElement("th")
    const textoTitulo2 = document.createTextNode("Apellidos")
    titulo2.appendChild(textoTitulo2)
    titulo.appendChild(titulo2)

    const titulo3 = document.createElement("th")
    const textoTitulo3 = document.createTextNode("Edad")
    titulo3.appendChild(textoTitulo3)
    titulo.appendChild(titulo3)
    tabla.appendChild(titulo)


   



    personas.forEach(persona => {
        const fila = tabla.insertRow()
        const celda1 = fila.insertCell()
        const celda2 = fila.insertCell()
        const celda3 = fila.insertCell()
        const textoCelda1 = document.createTextNode(persona.nombre)
        celda1.appendChild(textoCelda1)
        fila.appendChild(celda1)

        const textoCelda2 = document.createTextNode(persona.apellidos)
        celda2.appendChild(textoCelda2)
        fila.appendChild(celda2)


        const textoCelda3 = document.createTextNode(persona.edad)
        celda3.appendChild(textoCelda3)
        fila.appendChild(celda3)
        //tabla.appendChild(fila)
    })





}

console.log(personas)



