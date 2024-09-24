const tag_calculadoraIva = document.querySelector("#calculadoraIva")

const precio = document.createElement("input")
precio.setAttribute("placeholder", " Insira el precio aquí")
precio.setAttribute("type", "number")
tag_calculadoraIva.appendChild(precio)

const iva = document.createElement("p")
iva.setAttribute("class", "iva")
const textoIva = document.createTextNode(" x 21%")
iva.appendChild(textoIva)
tag_calculadoraIva.appendChild(iva)

const btnCalcular = document.createElement("button")
const textoBtn = document.createTextNode("Calcular")
btnCalcular. setAttribute("type", "submit")
btnCalcular.setAttribute("onclick", "resultado()")
btnCalcular.appendChild(textoBtn)
tag_calculadoraIva.appendChild(btnCalcular)

const precioFinal = document.createElement("p")
precioFinal.setAttribute("class", "precioFinal")
tag_calculadoraIva.appendChild(precioFinal)

const btnLimpiar = document.createElement("button")
const textoLimpiar = document.createTextNode("Reset")
btnLimpiar.setAttribute("type", "reset")
btnLimpiar.appendChild(textoLimpiar)
tag_calculadoraIva.appendChild(btnLimpiar)




tag_calculadoraIva.addEventListener("submit", (e) => {
    e.preventDefault()
    let resultado = precio.value * 1.21
    let textoResultado = document.createTextNode(resultado)
    precioFinal.appendChild(textoResultado)

    

})

tag_calculadoraIva.addEventListener("reset", () => {
    precioFinal.innerHTML = ""
})

    





