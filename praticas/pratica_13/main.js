
const btnPenuEnlace = document.getElementById("penuEnlace")
const btnEnlacesTwitter = document.querySelector("#enlacesTwitter")
const btnTercerParrafo = document.querySelector("#tercerParrafo")





const container = document.querySelector("#información")
const enlaces = document.getElementsByTagName("a")
const totalEnlaces = enlaces.length

const contarEnlace = () => { 
    const parrafoResultadoEnlaces = document.querySelector("#resultadoEnlaces")
    const textoEnlaces = document.createTextNode(`El total de enlaces es: ${totalEnlaces}.`)
    parrafoResultadoEnlaces.appendChild(textoEnlaces)
}

const penultimoEnlace = () => { 
    //const enlacesR = arrayEnlaces.reverse()


    const arrayEnlaces2 = []

    for (let i = 0; i < enlaces.length; i++){
        arrayEnlaces2.push(enlaces[i].outerHTML)
    } 
    const enlacesRDos = arrayEnlaces2.reverse()

    const penultimoEnlace = enlacesRDos[1]

    const parrafoPenuEnlace = document.querySelector("#resultadoPenEnlace")
    const textoParPenuEnlace = document.createTextNode(`El penultimo enlace es: `)
    parrafoPenuEnlace.appendChild(textoParPenuEnlace)
    parrafoPenuEnlace.innerHTML+= penultimoEnlace

}

const enlacesTwitter = () => {
    let arrayEnlaces = []
    const enlaceTwitter = "https://www.twitter.com"
    let contador = 0;

    for (let i = 0; i < enlaces.length; i++){
        arrayEnlaces.push(enlaces[i].attributes[0].nodeValue)
    }

    arrayEnlaces = [...arrayEnlaces]

    for (let i = 0; i < arrayEnlaces.length; i++){
        if (arrayEnlaces[i].includes(enlaceTwitter)) {
            contador += 1
        } else {
            continue
        }
    }
    
    const parrafoEnTwitter = document.querySelector("#resultadoTwtt")
    const textoTwitter = document.createTextNode(`En los enlaces encontrados, tenemos ${contador} que son de Twitter`)
    parrafoEnTwitter.appendChild(textoTwitter)

}

const tercerParrafo = () => {
    const tagP = container.querySelectorAll("p")
    const terParr = tagP[2]
    const links = terParr.querySelectorAll("a")


    const parrafoResultadoTerParf = document.getElementById("resultadoTerParf")
    const textotercer = document.createTextNode(`El numero de enlaces en el tercer párrafo son ${links.length}`)
    parrafoResultadoTerParf.appendChild(textotercer)
}



window.addEventListener("load", () => {
    const btnValidarEnlaces = document.getElementById("validarEnlaces")

    btnValidarEnlaces.addEventListener("click", contarEnlace)
    btnPenuEnlace.addEventListener("click", penultimoEnlace)
    btnEnlacesTwitter.addEventListener("click", enlacesTwitter)
    btnTercerParrafo.addEventListener("click", tercerParrafo)
})