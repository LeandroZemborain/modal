const contenidoModal = document.getElementById("contenedor-modal")
const button = document.getElementById("abrir")
const btnCerrar = document.getElementById("cerrar")

button.addEventListener("click",(e)=>{
    contenidoModal.classList.toggle("ocultar")
})
btnCerrar.addEventListener("click",(e)=>{
    contenidoModal.classList.toggle("ocultar")
})


//ocultar tocando el modal

// contenidoModal.addEventListener("click", (e)=>{
//     e.currentTarget.classList.toggle("ocultar")
// })


// descendant selector (space)
// child selector (>)
// adjacent sibling selector (+)
// general sibling selector (~)