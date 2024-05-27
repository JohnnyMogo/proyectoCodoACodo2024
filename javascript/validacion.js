


//Validacion de formulario de registro

document.getElementById('myForm').addEventListener('submit', function (event) {

    event.preventDefault();

    if (validar(this)) {
        this.submit();
    }

})

function limpiarError() {
    var errores = document.getElementsByClassName('error');
    for (let i = 0; i < errores.length; i++) {
        errores[i].innerHTML = '';

    }

}

function validar(formulario) {

    limpiarError();

    if (formulario.name.value.length == 0) {
        //alert('Debe completar el campo nombre');
        document.getElementById('errorNombre').innerText = "Campo obligatorio";
        return false;
    }

    if (formulario.lastname.value.length == 0) {
        document.getElementById('errorApellido').innerText = "Campo obligatorio";
        return false;
    }

    var expReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!expReg.test(formulario.email.value)) {
        document.getElementById('errorEmail').innerText = "Email inválido";
        formulario.email.focus()
        return false;
    }

    if (formulario.contrasena.value.length.trim() == 0) {
        document.getElementById('errorContrasena').innterText = 'Ingrese contraseña';
        formulario.email.focus()
        return false
    }


}





