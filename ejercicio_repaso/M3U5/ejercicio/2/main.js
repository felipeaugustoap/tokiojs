const tag_ejercicio = document.querySelector("#ejercicio")

const imagen = document.createElement("img")
imagen.setAttribute("src", "./media/naturaleza-violenta.webp")
imagen.setAttribute("class", "img_violenta")


const edad = parseInt(prompt("¿Cuantos años tienes?"))

if (edad <= 17) {
    window.open("https://www.google.com/" )
} else {
    tag_ejercicio.appendChild(imagen)
}