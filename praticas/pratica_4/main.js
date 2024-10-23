const nota1 = prompt("Idiquenos la primera nota: ")
const nota2 = prompt("Idiquenos la segunda nota: ")
const nota3 = prompt("Idiquenos la tercera nota: ")
const nota4 = prompt("Idiquenos la cuarta nota: ")
const nota5 = prompt("Idiquenos la quinta nota: ")
const nota6 = prompt("Idiquenos la sexta nota: ")



const media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4) + Number(nota5) + Number(nota6)) / 6;

const calculoMedia = () => {
    
    const resultado_media = media.toFixed(2)
    
    
    const butonMedia = document.getElementById("resultado1")
    butonMedia.innerHTML = `La media de las notas es ${resultado_media}`
}





const clasificacionMedia = () => {
    const button2 = document.getElementById("resultado2")
    if (media.toFixed(2) >= 0 && media.toFixed(2) < 3) {
        button2.innerHTML = `El aluno ha sacado una media de ${media.toFixed(2)} que corresponde a un Muy deficiente`
    } else if (media.toFixed(2) >= 3 && media.toFixed(2) < 5) {
        button2.innerHTML = `El aluno ha sacado una media de ${media.toFixed(2)} que corresponde a un Insuficiente`
    } else if (media.toFixed(2) >= 5 && media.toFixed(2) < 6) {
        button2.innerHTML = `El aluno ha sacado una media de ${media.toFixed(2)} que corresponde a un Suficiente`
    } else if (media.toFixed(2) >= 6 && media.toFixed(2) < 7) {
        button2.innerHTML = `El aluno ha sacado una media de ${media.toFixed(2)} que corresponde a un Bien`
    } else if (media.toFixed(2) >= 7 && media.toFixed(2) < 9) {
        button2.innerHTML = `El aluno ha sacado una media de ${media.toFixed(2)} que corresponde a un Notable`
    } else if (media.toFixed(2) >= 9 && media.toFixed(2) <= 10){
        button2.innerHTML = `El aluno ha sacado una media de ${media.toFixed(2)} que corresponde a un Sobresaliente`
    }
}


