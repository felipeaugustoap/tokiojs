let monedero = 50
let lista_dado = []


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let dado = getRandomInt(1, 6)


while (monedero <= 100) {
    let numero = prompt("Indique un numero de 1 a 6: ")
    let monedas = prompt("Indique un numero de monedas que quiere apostar: ")
    
    let saldo;

    if (monedas > monedero) { 
        alert(`numero de monedas no valido, el saldo es de ${monedero} monedas`)
    } else if (monedero == 0) {
        alert("Game Over")
        alert(`Los dados seleccionados fueron ${lista_dado}`)
        break
    } else if (numero == null || monedas == null) {
        break
    } else if (monedero > 0 && monedero <= 99) {
        dado = getRandomInt(1, 6)
        // console.log(dado)
        lista_dado.push(dado)
        if (numero == dado) {
            alert(`Has acertado, has ganado ${monedas * 2} monedas`)
            saldo = monedero + (monedas * 2)
            monedero = saldo
            alert(`Tu nuevo saldo monedero es de ${monedero} monedas`)
            if (monedero == 100) {
                alert("¡Enhorabuena! ¡Has ganado el juego!")
                alert(`Los dados seleccionados fueron ${lista_dado}`)
                break
            }
        } else if (numero == null || monedas == null) {
            break
        } else {
            alert(`Has errado en el numero informado, has perdido ${monedas} monedas.`)
            saldo = monedero - monedas
            monedero = saldo
            if (monedero == 0) {
                alert(`Tu nuevo saldo monedero es de ${monedero} monedas.`)
                alert("Game Over")
                alert(`Los dados seleccionados fueron ${lista_dado}`)
                break
            } else  {
                alert(`Tu nuevo saldo monedero es de ${monedero} monedas.`)
                if (monedero == 100) {
                    alert("¡Enhorabuena! ¡Has ganado el juego!")
                    alert(`Los dados seleccionados fueron ${lista_dado}`)
                    break
                }
                continue
            }
        }
    } else if (monedero == 100) {
        alert("¡Enhorabuena! ¡Has ganado el juego!")
        alert(`Los dados seleccionados fueron ${lista_dado}`)
        break
    }

} 
