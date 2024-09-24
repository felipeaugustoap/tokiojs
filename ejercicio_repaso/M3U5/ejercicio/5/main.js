const body = document.getElementsByTagName("body")

const tag_bkg = document.querySelector("#background")

const btn1 = document.createElement("button")
const textoBtn1 = document.createTextNode("Fundo 1")
btn1.setAttribute("class", "btn uno")
btn1.setAttribute("onclick", "fundo1()")
btn1.appendChild(textoBtn1)
tag_bkg.appendChild(btn1)

const btn2 = document.createElement("button")
const textoBtn2 = document.createTextNode("Fundo 2")
btn2.appendChild(textoBtn2)
btn2.setAttribute("class", "btn dos")
btn2.setAttribute("onclick", "fundo2()")
tag_bkg.appendChild(btn2)

const btn3 = document.createElement("button")
const textoBtn3 = document.createTextNode("Fundo 3")
btn3.appendChild(textoBtn3)
btn3.setAttribute("class", "btn tres")
btn3.setAttribute("onclick", "fundo3()")
tag_bkg.appendChild(btn3)

 

const fundo1 = () => {
    tag_bkg.setAttribute("class", "fundo1")
}

const fundo2 = () => {
    tag_bkg.setAttribute("class", "fundo2")
}

const fundo3 = () => {
    tag_bkg.setAttribute("class", "fundo3")
}