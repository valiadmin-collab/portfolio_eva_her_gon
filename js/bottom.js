// JavaScript Document

/*console.log( "hola bottom" );*/

$( document ).ready(function() {
	/*console.log( "document loaded" );*/
		
	/*const miTitulo = document.querySelector("h2");
	miTitulo.textContent = "¡Hola mundo 3!";*/
		
		
$( "#light" ).on( "click", function() {
	$('#body').attr('data-bs-theme', 'light');
} );

$( "#dark" ).on( "click", function() {
	$('#body').attr('data-bs-theme', 'dark');
} );
		
		
    });

    $( window ).on( "load", function() {
        /*console.log( "window loaded" );*/
    });
