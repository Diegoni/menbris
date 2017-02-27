$(function() {
	$("#div_mensaje").hide();
	var url_back = getUrl();
	$.ajax({
	    type:"GET", 
	    url: url_back+"index.php/Mensajes/getMensajes/1", 
	    success: function(data) 
	    {
	    	$.each(data, function(index, element) {
	    	 	$(".lista").append('<li class="ui-first-child"><a href="index.html" onclick="mostrarMensaje('+element.id_mensaje+')" class="ui-btn ui-btn-icon-right ui-icon-carat-r"><h2>'+element.alumno+'</h2><p><strong>'+element.titulo+'</strong></p><p>'+element.mensaje+'</p><p class="ui-li-aside"><strong>6:24</strong>PM</p></a></li>');
	        });
			
	    }, 
	    
	    error: function(jqXHR, textStatus, errorThrown) 
	    {
			//alert(errorThrown);
		},
		dataType: "json"
	});
});



function mostrarMensaje(id)
{
	var id_mensaje = id;
	
	$(".lista").hide(500);
	$("#div_mensaje").show(500);
	$.ajax({
	    type:"GET", 
	    url: url_back+"index.php/Mensajes/getMensaje/"+id_mensaje, 
	    success: function(data) 
	    {
	    	$.each(data, function(index, element) {
	    		$("#titulo").text();
	    	 	$("#titulo").text(element.titulo);
	    	 	
	    	 	$("#mensaje").text();
	    	 	$("#mensaje").text(element.mensaje);
	    	 	
	    	 	$("#curso").text();
	    	 	$("#curso").text(element.curso);
	    	 	
	    	 	$("#profesor").text();
	    	 	$("#profesor").text(element.profesor);
	    	 	
	    	 	$("#fecha").text();
	    	 	$("#fecha").text(element.date_add);
	        });
	    }, 
	    
	    error: function(jqXHR, textStatus, errorThrown) 
	    {
			//alert(errorThrown);
		},
		dataType: "json"
	});
}


function mostraLista()
{
	$(".lista").show(500);
	$("#div_mensaje").hide(500);	
}
