$(document).ready(function( ){
	var mesa=[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
	var platillos=$("div[name=platillos]");
	var costoPlatillo=[40, 25, 60, 30, 20];

	$("#hacerReservacion").click(function( ){
		var numeroMesa=$("#numeroMesa").val( );
		var numeroPersonas=$("#numeroPersonas").val( );
		var orden=$("input[type=checkbox]");
		var cantidadPlatillos=$("[name=cantidadPlatillos]");
		var total=0;
		var contadorPlatillos=0;
		var banderaMesa=false;

		if(numeroMesa>0 && numeroMesa<=20 && numeroPersonas>0 && numeroPersonas<=6){
			if(!mesa[numeroMesa-1]){
				$(".resumen").css("display", "inline");
				$("#resumenMesa").html(numeroMesa);
				$("#resumenPersonas").html(numeroPersonas);
				for(i=0; i<orden.length; i++){
					if(orden[i].checked){
						var agregaPlatillo=$("<li></li>");
						agregaPlatillo.html(platillos[i].innerText);
						if(banderaMesa){
							$("#listaPlatillos").append(agregaPlatillo);
						}else{
							$("#listaPlatillos").html(agregaPlatillo);
							banderaMesa=true;
						}
						total=total+(costoPlatillo[i]*cantidadPlatillos[i].valueAsNumber);
						contadorPlatillos=contadorPlatillos+cantidadPlatillos[i].valueAsNumber;
					}
				}
				if(contadorPlatillos>numeroPersonas){
					$("#notas").html("El número de platillos en total es mayor al número de personas. Verifique el número de órdenes antes de confirmar la reservación.")
				}else{
					$("#notas").html("");
				}
				$("#total").html("$ "+total+" MXN");
				mesa[numeroMesa-1]=true;
				total=0;
				$("#confirmarReservacion").click(function( ){
					$(".resumen").css("display", "none");
					banderaMesa=false;
				});
				$("#cancelarReservacion").click(function( ){
					mesa[numeroMesa-1]=false;
					banderaMesa=false;
					$(".resumen").css("display", "none");
				});
			}else{
				alert("La mesa ya está ocupada");
			}
		}else{
			alert("Algún dato es incorrecto")
		}
	});
});