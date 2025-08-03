window.addEventListener("resize", () => {
  headerDinamico();
});
window.addEventListener("DOMContentLoaded", () => {
  headerDinamico();
  //se puede usar clearInvertal seguido de la variable que almacena el intervalo para detenerlo
});
function headerDinamico() {
  const acordeon = document.querySelector("div.container.acordeon1");
  const menuPlus = document.querySelector("nav.nav-links");
  if (window.innerWidth <= 900) {
    acordeon.style.display = "block";
    menuPlus.style.display = "none";
  } else {
    menuPlus.style.display = "flex";
    acordeon.style.display = "none";
  }
}
const header = document.querySelector("header");
let color = 0.3;
function animacionHeader() {
  color += 0.05;
  if (color > 0.6) {
    color = 0.3;
  }
  header.style.backgroundColor = `rgba(31, 24, 24, ${color})`;
}
setInterval(animacionHeader, 100);

// const formulario = document.querySelector("#formulario1");
// formulario.addEventListener("submit", (e) => {
//   e.preventDefault(); // quita el envio de formulario por defecto
//   alert("No seas gay");
// });

// function botonesEstado(){
//    const botonesform=document.querySelectorAll("button.btn.btn-outline-warning")
//    for(let boton of botonesform){
//     boton.addEventListener("focus",(e)=>{ //al tener el focus dicho boton
//         e.target.classList.add("active")
//     })
//     boton.addEventListener("blur", (e)=>{ // al quitarse el focus
//         e.target.classList.remove("active")
//     })
//    }
// }

// const btnInicio=document.querySelector("div.btn-group-vertical #btnInicio")
// btnInicio.addEventListener("click", ()=>{
//     alert("eres loco ramon ")
// })
