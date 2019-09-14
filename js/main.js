// funcion de ventana modal de alerta
// alert("hola mundo");
// funcion(selector) metodo
/*
elementos a seleccionar           ETIQUETAS HTML              IDENTIFICADORES Y CLASES
ELEMENTOS DEL DOM               ej:                             eje:
    documento: document           nav: "nav"                        <nav class="menu"> : ".menu"
    navegador: navigator          header: "header"                  <header id="barra"> : "#barra"
    ventana: windows
*/
$(document).ready(documentoCargando);
function documentoCargando() {
  /*seleccionamo el btn menu, que estara escuchando el evento click
  * para ejecutar una funcion*/
  $("#btnMenu").on("click", abrirMenu);
  $(".overlay").on("click",cerrarMenu)
}
function abrirMenu() {
  /*Seleeccionamos la capa y la hacemos aparecer en 300 ms de velocidad*/
    $(".overlay").fadeIn( '300ms' );
    $("#menuLateral").animate({
        "left": 0
    }, '300ms');

}
function cerrarMenu() {
  $(".overlay").fadeOut( '300ms' );
  $("#menuLateral").animate({
      "left": "-300px"
  },'300ms');
}

