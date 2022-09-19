var activarse = document.querySelector('#tarjeta1');

//FUNCIÓN PARA ABRIR Y CERRAR LA VENTANA
export function ActivarDesactivar2() {    
    
    var explorer = document.getElementById("menu");/*<-- QUITA EL MENU */
    
    console.log("valor x",explorer);

    //Activa y desactiva la ventana
    if (explorer.style.display === "none") {
        explorer.style.display = "block";

    } else {
        explorer.style.display = "none";
        document.getElementById("proteinas").innerHTML= '';
    }  
}
// /* EVENTO */
activarse.addEventListener('click', ActivarDesactivar2);
