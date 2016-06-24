$(document).ready(principal);

function principal( ){
  $("#registro").click(registrar);
}

function registrar( ){
  var apellido=$("#apellidoUsuario").val( );
  var nombre=$("#nombreUsuario").val( );
  var correo=$("#correoUsuario").val( );
  var password1=$("#passwordUsuario").val( );
  var password2=$("#passwordUsuario2").val( );
  var pais=$("#paisUsuario").val( );
  var birthday=$("#cumpleUsuario").val( );
  var genero=$("input[name='genero'");
  
  if(nombre=="" || apellido=="" || correo=="" || password1=="" || password2=="" || pais=="" || birthday=="" || (genero[0].checked==false && genero[1].checked==false)){
    alert("¡Faltan algunos campos por llenar!");
  }else{
    if(password1==password2){
      if(genero[0].checked){
        alert("Sr. "+nombre+" se ha registrado correctamente\nBienvenido");
      }else{
        alert("Sra. "+nombre+" se ha registrado correctamente\nBienvenida");
      }
    }else{
      alert("Las contraseñas no coinciden");
    }
  }
}