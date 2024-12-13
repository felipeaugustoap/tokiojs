let lista_letras =[]
const max_letra = 1;

const verificar = RegExp("^[A-Z]+$", "i")

while (true) {
    let letra = prompt("Indique una letra: ")
    if (letra == null) {
        alert(`Las letras insertadas fueron: ${lista_letras}`)
        break   
    } else if (letra.length == max_letra && verificar.test(letra)){
        alert(`${letra} - VALIDO`)
        lista_letras.push(letra)
        if (letra == null) {
            alert(`Las letras insertadas fueron: ${lista_letras}`)
            break   
        }
       console.log(`2 - ${lista_letras}`) 
    } else if(!(letra.length == max_letra && verificar.test(letra))) {
        alert(`${letra} - INVALIDO, por favor inserte una letra`)
    } 
}









