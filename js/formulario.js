function validarForm () {
    let nombre = document.getElementById("nombre");
    let telefono= document.getElementById("telefono");
    let direccion = document.getElementById("direccion");
    let email = document.getElementById("email");
    let campoRequerido= document.getElementById("campoRequerido");
   
    nombre.value == ""? (campoRequerido.innerHTML= "<p>Campos requeridos (*) </p")
       ( nombre.classList.add("inputRequired")) : (campoRequerido.innerHTML= "");

    if ((telefono.value.length < 14 )||(isNaN(telefono.value))){
        campoRequerido.innerHTML= `<p> Campos requeridos (*) </p>`
        telefono.classList.add("inputRequired")
        return false;
    } else {campoRequerido.innerHTML= "";}
    
    if ((email.value.length == 0) || (!email.value.includes("@"))||(!email.value.includes(".com"))){
        campoRequerido.innerHTML= `<p> Campos requeridos (*) </p>`
        email.classList.add("inputRequired")
        return false;
    } else {campoRequerido.innerHTML= "";}

    if (direccion.value.length == 0){
        campoRequerido.innerHTML= `<p> Campos requeridos (*) </p>`
        direccion.classList.add("inputRequired")
        return false;
    } else {campoRequerido.innerHTML= "";}


    alert("Formulario enviado")
    document.getElementsByTagName("input").value.innerText="";
}   

document.getElementById("btnEnviar").addEventListener('click', validarForm);