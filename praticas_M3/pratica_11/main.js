window.addEventListener("load", () => {
    const elementoFecha = document.querySelector("#elementoFecha")
    
    const fecha = new Date()

    const semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado"]

    const diaSemana = fecha.getDay()

    const dia = fecha.getDate()

    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    const mes = fecha.getMonth()

    const anno = fecha.getFullYear()

    const hora = fecha.getHours()
    let minutos = fecha.getMinutes()
    minutos = minutos > 9 ? minutos : "0"+ minutos


    if (hora > 1) {
        const fechaTexto = document.createTextNode(`Hoy es ${semana[diaSemana]}, ${dia} de ${meses[mes]} de ${anno} y son las ${hora} : ${minutos} horas.`)
        elementoFecha.appendChild(fechaTexto)
    } else {
        const fechaTexto = document.createTextNode(`Hoy es ${semana[diaSemana]}, ${dia} de ${meses[mes]} de ${anno} y son la ${hora} : ${minutos} horas.`)
        elementoFecha.appendChild(fechaTexto)
    }
    
})




