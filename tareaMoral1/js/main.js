var i=0;
var cifra=1;
var estado=false;
var punto=false;
var a=0;
var b=0;
var caracteres=["+", "-", "x", "/", "%"];

function modifica(numero){
	if(!estado){
		a=a*cifra+numero;
		document.getElementById("pantalla").innerHTML="<h2>"+a+"</h2";
	}else{
		b=b*cifra+numero;
		document.getElementById("pantalla").innerHTML="<h2>"+a+" "+caracteres[i]+" "+b+"</h2";
	}
	if(punto){
		cifra=cifra/10;
	}else{
		cifra=cifra*10;
	}
}
function agregaOperacion(indice){
	estado=true;
	punto=false;
	cifra=1;
	i=indice;
	document.getElementById("pantalla").innerHTML="<h2>"+a+" "+caracteres[i]+"</h2>";
}

document.getElementById("uno").onclick=function( ){
	modifica(1);
};
document.getElementById("dos").onclick=function( ){
	modifica(2);
};
document.getElementById("tres").onclick=function( ){
	modifica(3);
};
document.getElementById("cuatro").onclick=function( ){
	modifica(4);
};
document.getElementById("cinco").onclick=function( ){
	modifica(5);
};
document.getElementById("seis").onclick=function( ){
	modifica(6);
};
document.getElementById("siete").onclick=function( ){
	modifica(7);
};
document.getElementById("ocho").onclick=function( ){
	modifica(8);
};
document.getElementById("nueve").onclick=function( ){
	modifica(9);
};
document.getElementById("cero").onclick=function( ){
	modifica(0);
};
document.getElementById("borrar").onclick=function( ){
	document.getElementById("pantalla").innerHTML="";
	a=0;
	b=0;
	i=0;
	cifra=1;
	estado=false;
	punto=false;
};
document.getElementById("punto").onclick=function( ){
	punto=true;
	if(!estado){
		document.getElementById("pantalla").innerHTML="<h2>"+a+".</h2";
	}else{
		document.getElementById("pantalla").innerHTML="<h2>"+a+" "+caracteres[i]+" "+b+".</h2";
	}
}
document.getElementById("suma").onclick=function( ){
	agregaOperacion(0);
};
document.getElementById("resta").onclick=function( ){
	agregaOperacion(1);
};
document.getElementById("multiplica").onclick=function( ){
	agregaOperacion(2);
};
document.getElementById("divide").onclick=function( ){
	agregaOperacion(3);
};
document.getElementById("modulo").onclick=function( ){
	agregaOperacion(4);
};
document.getElementById("igual").onclick=function( ){
	switch(i){
		case 0:
			document.getElementById("pantalla").innerHTML="<h2>"+(a+b)+"</h2>";
			break;
		case 1:
			document.getElementById("pantalla").innerHTML="<h2>"+(a-b)+"</h2>";
			break;
		case 2:
			document.getElementById("pantalla").innerHTML="<h2>"+(a*b)+"</h2>";
			break;
		case 3:
			document.getElementById("pantalla").innerHTML="<h2>"+(a/b)+"</h2>";
			break;
		case 4:
			document.getElementById("pantalla").innerHTML="<h2>"+(a%b)+"</h2>";
			break;
	}
	a=0;
	b=0;
	estado=false;
	punto=false;
	cifra=1;
	i=0;
};
