function validarForm () {
    let nombre = document.getElementById("nombre");
    let telefono= document.getElementById("telefono");
    let direccion = document.getElementById("direccion");
    let email = document.getElementById("email");
    let localidad= document.getElementById("localidad");
    let campoRequerido= document.getElementById("campoRequerido");
   
    if (nombre.value == ""){
        campoRequerido.innerHTML= "<p>Campos requeridos s </p"
        nombre.classList.add("inputRequired")
        return false;
    } else {campoRequerido.innerHTML= "";}

    if (telefono.value.length == 0){
        campoRequerido.innerHTML= `<p> Campos requeridos (*) </p>`
        telefono.classList.add("inputRequired")
        return false;
    } else {campoRequerido.innerHTML= "";}
    
    if (email.value.length == 0){
        campoRequerido.innerHTML= `<p> Campos requeridos (*) </p>`
        email.classList.add("inputRequired")
        return false;
    } else {campoRequerido.innerHTML= "";}

    if (direccion.value.length == 0){
        campoRequerido.innerHTML= `<p> Campos requeridos (*) </p>`
        direccion.classList.add("inputRequired")
        return false;
    } else {campoRequerido.innerHTML= "";}

    if (localidad.value.length == 0){
        campoRequerido.innerHTML= `<p> Campos requeridos (*) </p>`
        localidad.classList.add("inputRequired")
        return false;
    } else {campoRequerido.innerHTML= "";}
}

document.getElementById("btnEnviar").addEventListener('click', validarForm);