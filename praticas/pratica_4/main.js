const nota1 = prompt("Idiquenos la primera nota: ")
const nota2 = prompt("Idiquenos la segunda nota: ")
const nota3 = prompt("Idiquenos la tercera nota: ")
const nota4 = prompt("Idiquenos la cuarta nota: ")
const nota5 = prompt("Idiquenos la quinta nota: ")
const nota6 = prompt("Idiquenos la sexta nota: ")

const media = Math.round((Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4) + Number(nota5) + Number(nota6)) / 6);

const calculoMedia = () => {
    
    const resultado_media = media
    
    
    const butonMedia = document.getElementById("resultado1")
    butonMedia.innerHTML = `La media de las notas es ${resultado_media}`
}





const clasificacionMedia = () => {
    const button2 = document.getElementById("resultado2")
    if (media >= 0 && media <= 2.99) {
        button2.innerHTML = `El aluno ha sacado una media de ${media} que corresponde a un Muy deficiente`
    } else if (media >= 3 && media <= 4.99) {
        button2.innerHTML = `El aluno ha sacado una media de ${media} que corresponde a un Insuficiente`
    } else if (media >= 5 && media <= 5.99) {
        button2.innerHTML = `El aluno ha sacado una media de ${media} que corresponde a un Suficiente`
    } else if (media >= 6 && media <= 6.99) {
        button2.innerHTML = `El aluno ha sacado una media de ${media} que corresponde a un Bien`
    } else if (media >= 7 && media <= 8.99) {
        button2.innerHTML = `El aluno ha sacado una media de ${media} que corresponde a un Notable`
    } else if (media >= 9 && media <= 10){
        button2.innerHTML = `El aluno ha sacado una media de ${media} que corresponde a un Sobresaliente`
    }
}


