const container = document.getElementById("container")



const btnGenerar = document.createElement("button")
const txt_btn_generar = document.createTextNode("Genera una Tabla")
btnGenerar.appendChild(txt_btn_generar)
btnGenerar.setAttribute("onclick", "generarTabla()")
container.appendChild(btnGenerar)





const generarTabla = () => {
    const tabla = document.createElement("table")
    container.appendChild(tabla)
    
    const fila0 = tabla.insertRow()

    const celda0f0 = fila0.insertCell()
    const texto0f0 = document.createTextNode("Celda de la fila 0, columna 0")
    celda0f0.appendChild(texto0f0)

    const celda1f0 = fila0.insertCell()
    const texto1f0 = document.createTextNode("Celda de la fila 0, columna 1")
    celda1f0.appendChild(texto1f0)

    const celda2f0 = fila0.insertCell()
    const texto2f0 = document.createTextNode("Celda de la fila 0, columna 2")
    celda2f0.appendChild(texto2f0)



    const fila1 = tabla.insertRow()

    const celda0f1 = fila1.insertCell()
    const texto0f1 = document.createTextNode("Celda de la fila 1, columna 0")
    celda0f1.appendChild(texto0f1)

    const celda1f1 = fila1.insertCell()
    const texto1f1 = document.createTextNode("Celda de la fila 1, columna 1")
    celda1f1.appendChild(texto1f1)

    const celda2f1 = fila1.insertCell()
    const texto2f1 = document.createTextNode("Celda de la fila 1, columna 2")
    celda2f1.appendChild(texto2f1)


    const fila2 = tabla.insertRow()

    const celda0f2 = fila2.insertCell()
    const texto0f2 = document.createTextNode("Celda de la fila 2, columna 0")
    celda0f2.appendChild(texto0f2)

    const celda1f2 = fila2.insertCell()
    const texto1f2 = document.createTextNode("Celda de la fila 2, columna 1")
    celda1f2.appendChild(texto1f2)

    const celda2f2 = fila2.insertCell()
    const texto2f2 = document.createTextNode("Celda de la fila 2, columna 2")
    celda2f2.appendChild(texto2f2)


}
