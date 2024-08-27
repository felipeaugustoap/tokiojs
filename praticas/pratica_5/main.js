const primerPlato1 = document.getElementById("primerPlato1")
const plato_1 = `Tu has elegido como primer plato ${primerPlato1.innerHTML}`

const primerPlato2 = document.getElementById("primerPlato2")
const plato_2 = `Tu has elegido como primer plato ${primerPlato2.innerHTML}`

const primerPlato3 = document.getElementById("primerPlato3")
const plato_3 = `Tu has elegido como primer plato ${primerPlato3.innerHTML}`

const primerPlato4 = document.getElementById("primerPlato4")
const plato_4 = `Tu has elegido como primer plato ${primerPlato4.innerHTML}`

const primerPlato5 = document.getElementById("primerPlato5")
const plato_5 = `Tu has elegido como primer plato ${primerPlato5.innerHTML}`

const segundoPlato1 = document.getElementById("segundoPlato1")
const seg_plato_1 =  ` y como segundo plato ${segundoPlato1.innerHTML}`

const segundoPlato2 = document.getElementById("segundoPlato2")
const seg_plato_2 = ` y como segundo plato ${segundoPlato2.innerHTML}`

const segundoPlato3 = document.getElementById("segundoPlato3")
const seg_plato_3 = ` y como segundo plato ${segundoPlato3.innerHTML}`

const segundoPlato4 = document.getElementById("segundoPlato4")
const seg_plato_4 = ` y como segundo plato ${segundoPlato4.innerHTML}`

const segundoPlato5 = document.getElementById("segundoPlato5")
const seg_plato_5 = ` y como segundo plato ${segundoPlato5.innerHTML}`

let plato, s_plato;




function elegirPlato() {
    const plato = prompt("Indiquenos el nº del primer plato: ")
    const s_plato = prompt("Indiquenos el nº del segundo plato: ")

    const n_plato = Number(plato)
    const n_seg_plato = Number(s_plato)

    if (n_plato === 1 && n_seg_plato === 1) {
        alert(plato_1 + seg_plato_1)
    } else if (n_plato === 1 && n_seg_plato === 2) {
        alert(plato_1 + seg_plato_2)
    } else if (n_plato === 1 && n_seg_plato === 3) {
        alert(plato_1 + seg_plato_3)
    } else if (n_plato === 1 && n_seg_plato === 4) {
        alert(plato_1 + seg_plato_4)
    } else if (n_plato === 1 && n_seg_plato === 5) {
        alert(plato_1 + seg_plato_5)
    } else if (n_plato === 2 && n_seg_plato === 1) {
        alert(plato_2 + seg_plato_1)
    } else if (n_plato === 2 && n_seg_plato === 2) {
        alert(plato_2 + seg_plato_2)
    } else if (n_plato === 2 && n_seg_plato === 3) {
        alert(plato_2 + seg_plato_3)
    } else if (n_plato === 2 && n_seg_plato === 4) {
        alert(plato_2 + seg_plato_4)
    } else if (n_plato === 2 && n_seg_plato === 5) {
        alert(plato_2 + seg_plato_5)
    } else if (n_plato === 3 && n_seg_plato === 1) {
        alert(plato_3 + seg_plato_1)
    } else if (n_plato === 3 && n_seg_plato === 2) {
        alert(plato_3 + seg_plato_2)
    } else if (n_plato === 3 && n_seg_plato === 3) {
        alert(plato_3 + seg_plato_3)
    } else if (n_plato === 3 && n_seg_plato === 4) {
        alert(plato_3 + seg_plato_4)
    } else if (n_plato === 3 && n_seg_plato === 5) {
        alert(plato_3 + seg_plato_5)
    } else if (n_plato === 4 && n_seg_plato === 1) {
        alert(plato_4 + seg_plato_1)
    } else if (n_plato === 4 && n_seg_plato === 2) {
        alert(plato_4 + seg_plato_2)
    } else if (n_plato === 4 && n_seg_plato === 3) {
        alert(plato_4 + seg_plato_3)
    } else if (n_plato === 4 && n_seg_plato === 4) {
        alert(plato_4 + seg_plato_4)
    } else if (n_plato === 4 && n_seg_plato === 5) {
        alert(plato_4 + seg_plato_5)
    } else if (n_plato === 5 && n_seg_plato === 1) {
        alert(plato_5 + seg_plato_1)
    } else if (n_plato === 5 && n_seg_plato === 2) {
        alert(plato_5 + seg_plato_2)
    } else if (n_plato === 5 && n_seg_plato === 3) {
        alert(plato_5 + seg_plato_3)
    } else if (n_plato === 5 && n_seg_plato === 4) {
        alert(plato_5 + seg_plato_4)
    } else if (n_plato === 5 && n_seg_plato === 5) {
        alert(plato_5 + seg_plato_5)
    } else {
        alert("Opciones no validas")
    }

}

