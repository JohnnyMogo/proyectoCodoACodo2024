//Validacion de formulario de inicio de sesion

document.getElementById('inicioSesion').addEventListener('submit', function (event) {

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

    var expReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!expReg.test(formulario.email.value)) {
        alert('Ingrese un mail válido para continuar')
        formulario.email.focus()
        return false;
    }


}