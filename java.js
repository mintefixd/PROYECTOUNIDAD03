//--- Portada de ingreso ---//
let paginaPrincipal = document.getElementsByClassName('pagina_principal')[0].innerHTML
document.getElementsByClassName('pagina_principal')[0].innerHTML = ''


// Declaracion de funciones //
let guardar_card = null
function presentacion() {
  card = document.getElementsByClassName('card')
  guardar_card = card[0].innerHTML
  card[0].innerHTML = ''
  card[0].style = 'display: flex;flex-direction: column;gap: 40px;align-items: center;'

  card[0].innerHTML += "<button id='boton_next'>EMPEZAR</button>"
  card[0].innerHTML += ''
}
// llamadas a funciones
presentacion();

// Funcion del boton empezar 

function siguiente() {
  document.getElementById('boton_next').addEventListener("click", function(){
    let card = document.getElementsByClassName('card')
    card[0].innerHTML = guardar_card
    card[0].style = ''
    document.getElementsByClassName('titulo_presentacion')[0].innerHTML = ''
    document.getElementsByClassName("links_azules")[0].innerHTML = ''
    document.getElementsByClassName('pagina_principal')[0].innerHTML = paginaPrincipal
    })
}
siguiente();

//--- Presentacion de titulo ---//

let guardar




  // alternativa creando un elemento img
  //let card_image = document.createElement('img')
  //card_image.src = "https://i.pinimg.com/564x/81/1d/96/811d963e1d5fe6ee122c60de912360d9.jpg"
  //card_image.style = 'width:500px; height:300px'
  //card.appendChild(card_image)