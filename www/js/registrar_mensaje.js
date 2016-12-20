$(function() {
	$("#aceptar").hide();
	$.ajax({
	    type:"GET", 
	    //url: "http://www.menbris.com.ar/menbrisBack/index.php/Cursos/getCursos/1",
	    url: "http://localhost/benbrisBack/index.php/Cursos/getCursos/1", 
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
	$("#aceptar").show();
	var id_alumno = id;
	
	$.ajax({
	    type:"GET", 
	    //url: "http://www.menbris.com.ar/menbrisBack/index.php/Cursos/getCursos/1",
	    url: "http://localhost/benbrisBack/index.php/Cursos/getAlumnos/1", 
	    success: function(data) 
	    {
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
	var alumnos = "";
	var id_curso = $("#curso").val();
	var id_profesor = "1";
	
	$("input[name=alumnos]").each(function() {  // first pass, create name mapping
		var id = this.id;
		alumnos = alumnos + id + ",";
    });
	
	$.ajax({
		url: "http://localhost/benbrisBack/index.php/Mensajes/setAlumnos/", 
		type: 'POST',
		data : {
			alumnos:alumnos,
			id_curso:id_curso,
			id_profesor:id_profesor
		}
    }).done( function( data ) {
		console.log(data);
	});
}

