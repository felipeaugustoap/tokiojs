const tag_credenciales = document.querySelector("#credenciales")



const nombre = document.createElement("input")
nombre.setAttribute("id", "nombre")
const label_nombre = document.createElement("label")
label_nombre.setAttribute("for", "nombre")
const texto_label_nombre = document.createTextNode("Nombre de Usuario:")
label_nombre.appendChild(texto_label_nombre)
tag_credenciales.appendChild(label_nombre)
tag_credenciales.appendChild(nombre)

const contrasena = document.createElement("input")
contrasena.setAttribute("id", "contrasena")
contrasena.setAttribute("type", "password")
const label_contrasena = document.createElement("label")
label_contrasena.setAttribute("for", "contrasena")
const texto_label_contrasena = document.createTextNode("Contraseña:")
label_contrasena.appendChild(texto_label_contrasena)
tag_credenciales.appendChild(label_contrasena)
tag_credenciales.appendChild(contrasena)

const btn_enviar = document.createElement("button")
const btn_texto = document.createTextNode("Enviar")
btn_enviar.setAttribute("type", "submit")
btn_enviar.appendChild(btn_texto)
tag_credenciales.appendChild(btn_enviar)


class Usuario {
    nombre
    contrasena

}

const usuario_1 = new Usuario();
usuario_1.nombre = "felipeaap9";
usuario_1.contrasena = "f3l1p3";



tag_credenciales.addEventListener("submit", (evento) => {
    evento.preventDefault()

    if (nombre.value === usuario_1.nombre && contrasena.value === usuario_1.contrasena) {
        alert("Datos Correctos")
    } else {
        alert("Datos Incorrectos")
    }

    

})
