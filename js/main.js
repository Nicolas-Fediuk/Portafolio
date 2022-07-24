const btnNav = document.querySelector(".nav-action");
const nav = document.querySelector(".ventana-nav-secundario");
const header = document.querySelector("#header");
const nombre = document.querySelector(".form-nombre");
const email = document.querySelector(".form-email");
const mensaje = document.querySelector(".form-mensaje");
const btn = document.getElementById('button');
const p = document.querySelector(".mensajeError")

cargarEvento();

function cargarEvento() {
    btnNav.addEventListener("click", mostrarNav);
    nombre.addEventListener("blur", validarFormulario);
    email.addEventListener("blur", validarFormulario);
    mensaje.addEventListener("blur", validarFormulario);
    btn.addEventListener("click",enviarFormulario);
}

const validarCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const validarNombre = /^[a-zA-Z ]+$/;

function validarFormulario(e) {


    if (validarNombre.test(nombre.value)) {
        nombre.style.borderBottom = "1px solid green";
    }
    else {
        nombre.style.borderBottom = "1px solid red";
    }



    if (validarCorreo.test(email.value)) {
        email.style.borderBottom = "1px solid green";
    }
    else {
        email.style.borderBottom = "1px solid red";
    }


    if(mensaje.value != ""){
        mensaje.style.borderBottom = "1px solid green";
    }
    else{
        mensaje.style.borderBottom = "1px solid red";
    }
}



function enviarFormulario(){
    if(validarCorreo.test(email.value) && validarNombre.test(nombre.value) && mensaje.value != ""){

        document.getElementById('form').addEventListener('submit', function (event) {
            event.preventDefault();

            btn.value = 'Enviando...';

            const serviceID = 'default_service';
            const templateID = 'template_cbw2wut';

            emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar';
                Swal.fire({
                    title: 'Mensaje enviado',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                });
                borrarCampos();
            }, (err) => {
                btn.value = 'Mensaje enviado';
                alert(JSON.stringify(err));
            });
        });
        
    }
    else{
        p.textContent="Verifique los datos ingresados";
    }
}

function borrarCampos(){
    nombre.value = "";
    nombre.style.borderBottom = "1px solid black";
    email.value = "";
    email.style.borderBottom = "1px solid black";
    mensaje.value = "";
    mensaje.style.borderBottom = "1px solid black";
    p.textContent = "";
}




    
    



function mostrarNav() {
    if (nav.style.display == "none") {

        nav.style.display = "block";
    }
    else {
        nav.style.display = "none";
    }
}

window.onscroll = () => {
    nav.style.display = 'none';
}


