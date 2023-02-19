
var form = document.getElementById("form");

document.addEventListener("DOMContentLoaded", function(){
    form.addEventListener("submit", validarDatos);
});

var cont=0;

function validarDatos(evento){
    evento.preventDefault();
    var nombre = document.getElementById("name");
    var correo = document.getElementById("email");
    var clave  = document.getElementById("password");
    var claveC = document.getElementById("passwordC");

    validarNombre(nombre);
    validarEmail(correo);
    validarClave(clave, claveC);

    if(cont == 4){
        this.submit;
        alert("Inscripción correcta. Sesión iniciada por: " + nombre.value);
        limpiarCampos(nombre);
        limpiarCampos(correo);
        limpiarCampos(clave);
        limpiarCampos(claveC);
        imagenes("imagen-okN", 0);
        imagenes("imagen-okE", 0);
        imagenes("imagen-okC", 0);
        imagenes("imagen-okCC", 0);
        form.reset();
    }
}

function validarNombre(nombre){
    let numeros="0123456789";
    let bien = 0;
    if(!vacio(nombre)){
        borde(nombre, "3px solid #e05c5c");
        texto("faltaN", "#e05c5c");
        imagenes("imagen-errorN", 5);
        imagenes("imagen-okN", 0);
        bien++;
    }
    for(i=0; i<(nombre.value.length); i++){
        if(numeros.indexOf(nombre.value.charAt(i),0)!=-1){    
            borde(nombre, "3px solid #e05c5c");
            texto("faltaN", "#e05c5c");
            alerta("faltaN", "No debe contener nº");
            imagenes("imagen-errorN", 5);
            imagenes("imagen-okN", 0);
            bien++;
        }
    }
    if(bien == 0){
        borde(nombre, "3px solid #50cc64");
        texto("faltaN", "#2f3644");
        imagenes("imagen-errorN", 0);
        imagenes("imagen-okN", 5);
        cont = 1;
        return true;
    }else{
        return false;
    }
}

function validarEmail(correo){
    if(!vacio(correo)){
        borde(correo, "3px solid #e05c5c");
        texto("faltaE", "#e05c5c");
        imagenes("imagen-errorE", 5);
        imagenes("imagen-okE", 0);
        return false;
    }
    if (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.exec(correo.value)){
        borde(correo, "3px solid #50cc64");
        texto("faltaE", "#2f3644");
        imagenes("imagen-errorE", 0);
        imagenes("imagen-okE", 5);
        cont = 2;
        return true;
    } else {
        borde(correo, "3px solid #e05c5c");
        texto("faltaE", "#e05c5c");
        alerta("faltaE", "Email incorrecto");
        imagenes("imagen-errorE", 5);
        imagenes("imagen-okE", 0);
        return false;
    }
}

function validarClave(clave, claveC){
    var bien = 0;
    if(!vacio(clave)){
        borde(clave, "3px solid #e05c5c");
        texto("faltaC", "#e05c5c");
        imagenes("imagen-okC", 0);
        imagenes("imagen-errorC", 5);
        bien++;
    }
    if(!vacio(claveC)){
        borde(claveC, "3px solid #e05c5c");
        texto("faltaCC", "#e05c5c");
        imagenes("imagen-okCC", 0);
        imagenes("imagen-errorCC", 5);
        bien++;
    }
    if(clave.value.length > 8){
        alerta("faltaC", "No debe tener más de 8 caracteres");
        texto("faltaC", "#e05c5c");
        imagenes("imagen-okC", 0);
        imagenes("imagen-errorC", 5);
        borde(clave, "3px solid #e05c5c");
        bien++;
    }else{
        if(clave.value != claveC.value){
            borde(clave, "3px solid #50cc64");
            borde(claveC, "3px solid #e05c5c");
            texto("faltaC", "#2f3644");
            texto("faltaCC", "#e05c5c");
            alerta("faltaCC", "Las contraseñas no coinciden");
            imagenes("imagen-errorCC", 5);
            imagenes("imagen-errorC", 0);
            imagenes("imagen-okCC", 0);
            imagenes("imagen-okC", 5);
            bien++;
        }
    }
    
    if(bien == 0){
        borde(clave, "3px solid #50cc64");
        borde(claveC, "3px solid #50cc64");
        texto("faltaC", "#2f3644");
        texto("faltaCC", "#2f3644");
        imagenes("imagen-okC", 5);
        imagenes("imagen-okCC", 5);
        imagenes("imagen-errorC", 0);
        imagenes("imagen-errorCC", 0);
        cont = 4;
        return true;
    }else{
        return false;
    }
}

function imagenes(imagen, posZ){
    document.getElementById(imagen).style.zIndex = posZ;
}

function borde(campo, color){
    campo.style.border = color;
}

function texto(campo, color){
    document.getElementById(campo).style.color = color;
}

function alerta(campo, texto){
    document.getElementById(campo).textContent = texto;
}

function vacio(campo){
    if(campo.value == ""){
        campo.style.border = "3px solid #e05c5c";
        return false;
    }
    return true;
}

function limpiarCampos(campo){
    campo.style.border = "1px solid #c4c5c8";
}