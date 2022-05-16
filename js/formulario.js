function validarForm () {
    let nombre = document.getElementById("nombre").value;
    // let telefono= document.getElementById("telefono").value;
    // let direccion = document.getElementById("direccion").value;
    // let email = document.getElementById("email").value;
    // let localidad= document.getElementById("localidad").value;
    let campoRequerido= document.getElementById("campoRequerido");
   
    if (nombre == ""){
        campoRequerido.innerHtml= `<p> Campos requeridos (*) </p>`
        // return false;
    } else {campoRequerido.innerHTML= "";}

    // if (telefono.length == 0){
    //     campoRequerido.innerHtml= `<p> Campos requeridos (*) </p>`
    //     // return false;
    // } else {campoRequerido.innerHTML= "";}
    
    // if (email.length == 0){
    //     campoRequerido.innerHtml= `<p> Campos requeridos (*) </p>`
    //     // return false;
    // } else {campoRequerido.innerHTML= "";}

    // if (direccion.length == 0){
    //     campoRequerido.innerHtml= `<p> Campos requeridos (*) </p>`
    //     // return false;
    // } else {campoRequerido.innerHTML= "";}

    // if (localidad.length == 0){
    //     campoRequerido.innerHtml= `<p> Campos requeridos (*) </p>`
    //     // return false;
    // } else {campoRequerido.innerHTML= "";}
}

document.getElementById("btnEnviar").addEventListener('click', validarForm);