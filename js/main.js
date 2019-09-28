$(document).ready(documentoCargando);
function documentoCargando() {

  $("#btnMenu").on("click", abrirMenu);
  $(".overlay").on("click",cerrarMenu);
  $("#btnAbrirModal").on("click",abrirModal);
  $("#btnCerrarModal").on("click",cerrarModal);
  $("#btnIrAlCielo").on("click",irAlCielo);
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
//----------- detectar scroll en la ventana--------------------

$(window).scroll(desplazarScroll);
function desplazarScroll() {
    var cordenada = $(this).scrollTop();
    if ( cordenada > 200 ){
        $("#btnIrAlCielo").slideDown('300ms');
        // añade una clase en el menu navar -----------
        $("header").addClass("nav-dark")
      //  ---------------------------------------------------
    } else{
        $("#btnIrAlCielo").slideUp('300ms');
        // remueve una clase --------------------------------------
        $("header").removeClass("nav-dark")
        // ------------------------------------------------
    }
}

function irAlCielo() {
    $("html, body").animate({
        "scrollTop": 0
    },'300ms');
}

