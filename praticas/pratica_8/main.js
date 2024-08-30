const p_resultado_factorial = document.querySelector("#resultado_factorial")


let numero_inicial = parseInt(prompt("Indiquenos un numero de 0 a 10 para calculo del factorial: "))


if (numero_inicial == 0) {
    p_resultado_factorial.innerHTML = `El factorial de 0 es 1`
    console.log("1")
}

const factorial = (numero_inicial) => {
    let resultado = 1
    for (let i = 1; i <= numero_inicial; i++){
        resultado = resultado * i
    }
    return resultado
}

while (numero_inicial) {


    
    
    if (numero_inicial < 0 || numero_inicial > 10) {
        alert("El numero no es correcto")
        numero_inicial = parseInt(prompt("Indiquenos un numero de 0 a 10 para calculo del factorial: "))
        if (numero_inicial == 0) {
            p_resultado_factorial.innerHTML = `El factorial de 0 es 1`
            console.log("2")
            break
        } else if (numero_inicial > 0 && numero_inicial <= 10) {
            factorial(numero_inicial)
            p_resultado_factorial.innerHTML = `O factorial del numero ${numero_inicial} es ${factorial(numero_inicial)}`
            break
        } 

    } else if (numero_inicial == 0) {
        p_resultado_factorial.innerHTML = `El factorial de 0 es 1`
        console.log("2")
        break
    } else if (numero_inicial > 0 && numero_inicial <= 10) {
        factorial(numero_inicial)
        p_resultado_factorial.innerHTML = `O factorial del numero ${numero_inicial} es ${factorial(numero_inicial)}`
        break
    }
    

}
