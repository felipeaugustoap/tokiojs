const tag_calculadora = document.querySelector("#calculadora")

const numeros = document.createElement("div")
numeros.setAttribute("class", "numero")
tag_calculadora.appendChild(numeros)

const input_n1 = document.createElement("input")
input_n1.setAttribute("type", "number")
input_n1.setAttribute("placeholder", "Insira el primer numero")
numeros.appendChild(input_n1)

const input_n2 = document.createElement("input")
input_n2.setAttribute("type", "number")
input_n2.setAttribute("placeholder", "Insira el segundo numero")
numeros.appendChild(input_n2)

const botones = document.createElement("div")
botones.setAttribute("class", "botones")

const btn_calcular = document.createElement("button")
btn_calcular.setAttribute("class", "btn calcular")
const text_btn = document.createTextNode("Calcular")
btn_calcular.appendChild(text_btn)
// btn_calcular.setAttribute("onclick", "MCD()")
btn_calcular.setAttribute("type", "submit")
botones.appendChild(btn_calcular)

const btn_reset = document.createElement("button")
btn_reset.setAttribute("type", "reset")
const texto_btn_rst = document.createTextNode("Reset")
btn_reset.appendChild(texto_btn_rst)
btn_reset.setAttribute("class", "btn reset")
botones.appendChild(btn_reset)
tag_calculadora.appendChild(botones)

const resultado = document.createElement("p")
resultado.setAttribute("class", "resultado")


btn_reset.addEventListener("click", () => {
    location.reload()
})


btn_calcular.addEventListener("click", () => {
    let n1 = parseInt(input_n1.value);
    let n2 = parseInt(input_n2.value);

    if (isNaN(n1) || isNaN(n2)) {
        let texto_resultado = document.createTextNode("Valor no valido, esto no es un numero")
        resultado.appendChild(texto_resultado)
        tag_calculadora.appendChild(resultado)
    } else if (n1 === 0 || n2 === 0) { 
        let texto_resultado = document.createTextNode("Valor no valido, no es divisible por 0")
        resultado.appendChild(texto_resultado)
        tag_calculadora.appendChild(resultado)
    } else {
        let dividendo = n1
        let divisor = n2
        let resto = 0
        while (divisor != 0) {
            resto = dividendo % divisor
            dividendo = divisor
            divisor = resto
        }

        let texto_resultado = document.createTextNode(`El MCD de ${n1} y de ${n2} es ${dividendo}`)
        resultado.appendChild(texto_resultado)
        tag_calculadora.appendChild(resultado)

    }


})


