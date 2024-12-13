const formulario = document.forms["datosUsuario"]
const campoUsuario = formulario.usuario
const campoEmail = formulario.email 
const campoContrasena = formulario.contrasena
const campoRepitaContrasena = formulario.repitaContrasena
const mensajeUsuario = document.getElementById("mensajeUsuario")
const mensajeEmail = document.querySelector("#mensajeEmail")
const mensajeContrasena = document.getElementById("mensajeContrasena")
const mensajeRepContrasena = document.getElementById("mensajeRepContrasena") 
const btnEnviar = document.querySelector("#btnEnviar")

//Expresiones Regulares

const validarEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

const validarContrasena = /^[\.a-zA-Z0-9\-]{6,12}/

const validarFormulario = () => { 
        if (campoUsuario.value.length < 4) {
            alert("El campo nombre es demasiado corto")
        }
    
        if (validarEmail.test(campoEmail.value) == false && validarContrasena.test(campoContrasena.value) == false) {
            alert("El campo email es erroneo")
            
        }
        if (validarContrasena.test(campoContrasena.value) == false) {
            
            alert("El campo Contraseña no cumple los requisitos")
        }
        if (campoContrasena.value !== campoRepitaContrasena.value) {
        
        alert("El campo Repita Contraseña no coincide")
        }
        if (campoUsuario.value.length > 4 && validarEmail.test(campoEmail.value) && validarContrasena.test(campoContrasena.value) && campoContrasena.value === campoRepitaContrasena.value) {
        formulario.submit()
        }
    
}






window.addEventListener("load", () => {
    

    formulario.addEventListener("submit", (evt) => {
        evt.preventDefault()
        validarFormulario()
        
    }) 


    
    campoUsuario.addEventListener("focus", () => {
    
        mensajeUsuario.innerText=""
    })
    
    campoUsuario.addEventListener("blur", () => {
        if (campoUsuario.value.length > 0 && campoUsuario.value.length < 4) {
            const textoMensajeUsuario = document.createTextNode("Nombre de usuario muy corto")
            mensajeUsuario.setAttribute("class","mensaje error")
            mensajeUsuario.appendChild(textoMensajeUsuario)
        } else {
            mensajeUsuario.innerText=""
        }
        return true
    })
    
    
    
    campoEmail.addEventListener("focus", () => {
        mensajeEmail.innerText=""
    })
    campoEmail.addEventListener("blur", () => {
        if (validarEmail.test(campoEmail.value) == false && campoEmail.value.length > 0) {
            const textoMensajeEmail = document.createTextNode("Correo Eletronico erroneo")
            mensajeEmail.setAttribute("class","mensaje error")
            mensajeEmail.appendChild(textoMensajeEmail)
        } else {
            mensajeEmail.innerText=""
        }
        return true
    })
    
    campoContrasena.addEventListener("focus", () => {
        const textoMensajeContrasena = document.createTextNode("Es necesario tener entre 6 y 12 caracteres. ")
        mensajeContrasena.removeAttribute("class", "error")
        mensajeContrasena.setAttribute("class","mensaje")
        mensajeContrasena.innerHTML = ""
        mensajeContrasena.appendChild(textoMensajeContrasena)
        
        
    })
    
    campoContrasena.addEventListener("blur", () => {
        if(validarContrasena.test(campoContrasena.value) == false && campoContrasena.value.length > 0){
            mensajeContrasena.innerText = ""
            const textoMensajeContrasena2 = document.createTextNode("Contraseña no cumple los requisitos")
            mensajeContrasena.innerText = ""
            mensajeContrasena.setAttribute("class","mensaje error")
            mensajeContrasena.appendChild(textoMensajeContrasena2)
        } else {
            mensajeContrasena.innerHTML = ""
        }
        
    })
    
    campoRepitaContrasena.addEventListener("focus", () => {
        mensajeRepContrasena.innerText=""
    })
    
    campoRepitaContrasena.addEventListener("blur", () => {
        if (campoContrasena.value !== campoRepitaContrasena.value) {
            const textoMensajeRepContrasena = document.createTextNode("Contraseña no coincide")
            mensajeRepContrasena.setAttribute("class", "error")
            mensajeRepContrasena.appendChild(textoMensajeRepContrasena)
            console.log("correcto")
        } else{
            mensajeRepContrasena.innerText=""
        }
    })
    
})    
