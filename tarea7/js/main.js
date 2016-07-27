var inicio1='<div class="row"><div class="col-md-6"><div class="mensaje-usuario-1"><h5 class="uno">';
var inicio2='<div class="row"><div class="col-md-6"></div><div class="col-md-6"><div class="mensaje-usuario-2"><h5 class="dos">';
var fin='</p></div></div></div>';

$(document).on("ready", principal);

function principal( ){
  $("#submit-usuario-1").on("click", enviaMensaje1);
  $("#submit-usuario-2").on("click", enviaMensaje2);
}

function enviaMensaje1( ){
  var nombre=$("#nombre-usuario-1").val( );
  var mensaje=$("#mensaje-usuario-1").val( );
  $("#ventana-chat").append(inicio1+nombre+":</h5><p>"+mensaje+fin);
}

function enviaMensaje2( ){
  var nombre=$("#nombre-usuario-2").val( );
  var mensaje=$("#mensaje-usuario-2").val( );
  $("#ventana-chat").append(inicio2+nombre+":</h5><p>"+mensaje+fin);
}