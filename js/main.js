const btnNav = document.querySelector(".nav-action");
const nav = document.querySelector(".ventana-nav-secundario");
const header = document.querySelector("#header");
const nombre = document.querySelector(".form-nombre");
const email = document.querySelector(".form-email");
const mensaje = document.querySelector(".form-mensaje");
const btn = document.getElementById('button');

cargarEvento();

function cargarEvento() {
    btnNav.addEventListener("click", mostrarNav);
    // nombre.addEventListener("blur", validarFormulario);
    // email.addEventListener("blur", validarFormulario);
    // mensaje.addEventListener("blur", validarFormulario);
}

const validarCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const validarNombre = /^[A-Z]+$/i;
console.log(btn);



    btn.style.cursor = "pointer";
    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault();
    
        btn.value = 'Enviando...';
    
        const serviceID = 'default_service';
        const templateID = 'template_cbw2wut';
    
        emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Enviar';
            alert('Mensaje enviado!');
            nombre.value = "";
            email.value = "";
            mensaje.value = "";
        }, (err) => {
            btn.value = 'Mensaje enviado';
            alert(JSON.stringify(err));
        });
    });
    



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

// function validarFormulario(e) {
//     if (e.target.type === "text") {
//         if (validarNombre.test(e.target.value)) {
//             e.target.style.borderBottom = "1px solid green";
//         }
//         else {
//             e.target.style.borderBottom = "1px solid red";
//         }
//     }
//     if (e.target.type === "email") {
//         if (validarCorreo.test(e.target.value)) {
//             e.target.style.borderBottom = "1px solid green";
//         }
//         else {
//             e.target.style.borderBottom = "1px solid red";
//         }
//     }
//     if (mensaje.value.length > 30) {
//         e.target.style.borderBottom = "1px solid green";
//     }
//     else {
//         e.target.style.borderBottom = "1px solid red";
//     }
// }
