$(function() {
	var url_back = getUrl();
	$("#aceptar").hide();
	$("#form_mensaje").hide();
	$.ajax({
	    type:"GET", 
	    url: url_back+"index.php/Cursos/getCursos/1", 
	    success: function(data) 
	    {
	    	$.each(data, function(index, element) {
	    	 	$("#curso").append('<option value="'+element.id_curso+'">'+element.curso+'</option>');
	        });
			
	    }, 
	    
	    error: function(jqXHR, textStatus, errorThrown) 
	    {
			//alert(errorThrown);
		},
		dataType: "json"
	});
});



function getAlumnos(id)
{
	var url_back = getUrl();
	$("#aceptar").show();
	$("#form_mensaje").hide();
	var id_alumno = id;
	
	$.ajax({
	    type:"GET", 
	    url: url_back+"index.php/Cursos/getAlumnos/1", 
	    success: function(data) 
	    {
	    	$( "#alumnos" ).empty();
	    	$.each(data, function(index, element) {
	    		
	    	 	$("#alumnos").append('<li><label class="ui-btn ui-icon-carat-r" for="'+element.id_alumno+'"><input type="checkbox" name="alumnos" id="'+element.id_alumno+'" checked	>'+element.alumno+'</label></li>');
	        });
			
	    }, 
	    
	    error: function(jqXHR, textStatus, errorThrown) 
	    {
			//alert(errorThrown);
		},
		dataType: "json"
	});
}




function setMensaje()
{
	var url_back = getUrl();
	var alumnos = "";
	var id_curso = $("#curso").val();
	var id_profesor = "1";
	
	$("input[name=alumnos]").each(function() {  // first pass, create name mapping
		var id = this.id;
		alumnos = alumnos + id + ",";
    });
	
	$.ajax({
		url: url_back+"index.php/Mensajes/setAlumnos/", 
		type: 'POST',
		data : {
			alumnos:alumnos,
			id_curso:id_curso,
			id_profesor:id_profesor
		}
    }).done( function( data ) {
    	$("#aceptar").hide();
    	$("#form_alumnos").hide();
    	$("#form_mensaje").show();
    	
    	$("#id_mensaje").val(data);
	});
}



function guardarMensaje()
{
	var url_back = getUrl();
	var id_mensaje = $("#id_mensaje").val();
	var titulo = $("#titulo").val();
	var mensaje = $("#mensaje").val();
	
	$.ajax({
		url: url_back+"index.php/Mensajes/guardarMensaje/", 
		type: 'POST',
		data : {
			id_mensaje:id_mensaje,
			titulo:titulo,
			mensaje:mensaje
		}
    }).done( function( data ) {
    	$( "#alumnos" ).empty();
    	$("#aceptar").hide();
    	$("#form_alumnos").show();
    	$("#form_mensaje").hide();
	});
}