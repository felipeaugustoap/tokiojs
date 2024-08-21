let lista_letras =[]
const max_letra = 1;

const verificar = RegExp("^[A-Z]+$", "i")

while (true) {
    let letra = prompt("Indique una letra: ")
    if (letra == null) {
        alert(`Las letras insertadas fueron: ${lista_letras}`)
        break
        
        
    }
     
    if (letra.length == max_letra && verificar.test(letra)){
        alert(`${letra} - VALIDO`)
        let nova_letra = prompt("Indique una letra: ")
        if (nova_letra.length == max_letra && verificar.test(nova_letra)) {
            alert(`${nova_letra} - VALIDO`)
            lista_letras.push(nova_letra)
        } else if (!(nova_letra.length == max_letra && verificar.test(nova_letra))) {
            alert(`${nova_letra} - INVALIDO, por favor inserte una letra`)
        } else if (nova_letra == null) {
            alert(`Las letras insertadas fueron: ${lista_letras}`)

        }
       lista_letras.push(letra) 
    } else if(!(letra.length == max_letra && verificar.test(letra))) {
        alert(`${letra} - INVALIDO, por favor inserte una letra`)
    } 
}










