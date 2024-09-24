const tag_p = document.querySelector("#numero")
const valida_numero = document.createElement("p")
valida_numero.setAttribute("id", "validaNumero")


const ejercicio = () => {
    let numero = prompt("Indique un numero: ")
    let resultado_valida = document.createTextNode("Esto es un numero")
    let resultado_no_valida = document.createTextNode("Esto no es un numero")
    tag_p.appendChild(valida_numero)
    if (isNaN(numero)) {
        console.log("Esto no es un numero") 
        valida_numero.appendChild(resultado_no_valida)

    } else {
        console.log("Esto es un numero")
        tag_p.appendChild(valida_numero)
        valida_numero.appendChild(resultado_valida)
    }
}