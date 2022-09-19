

var activarse = document.querySelector('#tarjeta0');
//FUNCIÓN PARA ABRIR Y CERRAR LA VENTANA
export function ActivarDesactivar() {    
    
    var explorer = document.getElementById("menu");/*<-- QUITA EL MENU */
    
    console.log("valor x",explorer);

    //Activa y desactiva la ventana
    if (explorer.style.display === "none") {
        explorer.style.display = "block";

    } else {
        explorer.style.display = "none";
        document.getElementById("proteinas").innerHTML=
            
        /* KIMBERLY */
        '<section id="cuadrosBroma">'+
            '<h1 class="tituloProteina">PROTEÍNAS</h1>'+

            '<div class="padreProte" id="padreEsquemas"></div>'+
        '</section>'+

        /* GENESIS */
        '<section>'+
            '<div class="padreProteinas">'+

                '<div class="subVdProteina">'+
                    '<h3>Video Funciones de la proteina en el organismo</h3>'+
                '</div>'+
        
                '<video class="vdProteinas" width="784" height="458" controls>'+
                    // '<source src="./img/Portada.mp4" type="video/mp4">'+
                    'Tu navegador no es compatible con videos HTML5'+
                '</video>'+
            '</div>'+
        '</section>'+
            
        /* NATALI */
        '<section>'+
            '<div class="padreTexProt">'+
                '<div class="imgProteText">'+
                    '<img>'+
                '</div>'+
                '<div>'+
                    '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took  .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took.Lorem Ipsum is simply dummy text of the printing and typesetting i.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took  .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took.Lorem Ipsum is simply dummy text of the printing and typesetting i</p>'+
                '</div>'+
            '</div>'+
        '</section>';
    }  
}


// /* EVENTO */
activarse.addEventListener('click', ActivarDesactivar);



/************ FOREACH PARA MOSTRAR LAS PROTEINAS ***************/

import { proteinass } from "../data/obejtoProteina.js";

let bt_userCredit2 = document.querySelector('#tarjeta0');
export function crearCarts(){

    console.log("HOLAA");
    //VARIABLE EN DONDE VA A COLOCARSE LOS CUADRITOS
    let root = document.querySelector("#padreEsquemas");

    proteinass.forEach(function(user1){
        console.log("Nombre: ", user1.user_id);

        let cuadros = document.createElement("div");

        cuadros.innerHTML =
            '<div class="hijoProte">'+
                '<div class="cajaProte"><h2>'+user1.titulo+'</h2></div>'+
                '<div class="subHijoProte">'+
                    '<div><img src="'+user1.img+'"></div>'+
                    '<p> Porción: '+user1.porcion+'</p>'+
                    '<p> Energía: '+user1.Energía+'</p>'+
                    '<p> Calorías: '+user1.calorias+'</p>'+
                    '<p> Proteínas: '+user1.porcion+'</p>'+
                    '<p> Carbohidratos: '+user1.carbohidratos+'</p>'+
                    '<p> Lípidos: '+user1.lipidos+'</p>'+
                '</div>'+
            '</div>';  

        root.appendChild(cuadros);
    })


};

bt_userCredit2.addEventListener('click',crearCarts);//<--Este