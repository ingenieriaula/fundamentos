$(document).ready(documentoCargando);
function documentoCargando() {

  $("#btnMenu").on("click", abrirMenu);
  $(".overlay").on("click",cerrarMenu);
  $("#btnAbrirModal").on("click",abrirModal);
  $("#btnCerrarModal").on("click",cerrarModal);
}
function abrirMenu() {
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
function abrirModal() {
    $(".modal").slideDown('300ms');
}
function cerrarModal () {
    $(".modal").slideUp('300ms');
}

