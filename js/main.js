const btnNav = document.querySelector(".nav-action");
const nav = document.querySelector(".ventana-nav-secundario");

cargarEvento();

function cargarEvento(){
    btnNav.addEventListener("click",mostrarNav);
}

function mostrarNav(){
    if(nav.style.display == "none"){
        nav.style.display = "block";
    }
    else{
        nav.style.display = "none";
    }
}

window.onscroll = () =>{
    nav.style.display = 'none';
}