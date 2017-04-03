$(function() 
{
	$("#div_mensaje").hide();
	var url_back = getUrl();
	$.ajax({
	    type:"GET", 
	    url: url_back+"index.php/Alumnos/getAlumnos/1", 
	    success: function(data) 
	    {
	    	$.each(data, function(index, element) {
	    	 	$(".lista").append('<li><a href="editar_alumnos.html" onclick="cargarAlumno('+element.id_alumno+')" class="ui-btn ui-btn-icon-right ui-icon-carat-r"><h2>'+element.alumno+'</h2></a></li>');
	        });
			
	    }, 
	    
	    error: function(jqXHR, textStatus, errorThrown) 
	    {
			//alert(errorThrown);
		},
		dataType: "json"
	});
});



function cargarAlumno(id)
{
	console.log("F:cargarAlumno");
	var id_alumno = id;
	var url_back = getUrl();
	
	console.log("url back"+url_back);
	
	$(".lista").hide(500);
	$("#div_mensaje").show(500);
	$.ajax({
	    type:"GET", 
	    url: url_back+"index.php/Alumnos/getAlumno/"+id_alumno, 
	    success: function(data) 
	    {
	    	$.each(data, function(index, element) {
	    		$("#alumno").val();
	    	 	$("#alumno").val(element.alumno);
	    	 	
	    	 	$("#codigo").val();
	    	 	$("#codigo").val(element.codigo);
	    	 	
	    	 	$("#id_alumno").val();
	    	 	$("#id_alumno").val(element.id_alumno);
	        });
	    }, 
	    
	    error: function(jqXHR, textStatus, errorThrown) 
	    {
			//alert(errorThrown);
		},
		dataType: "json"
	});
}



function editarAlumno()
{
	console.log("F:editarAlumno");
	var url_back = getUrl();
	var alumno = $("#alumno").val();
	var id_alumno = $("#id_alumno").val();
	console.log(alumno+id_alumno);
	
	
	$.ajax({
		url: url_back+"index.php/Alumnos/editarAlumno/", 
		type: 'POST',
		data : {
			alumno:alumno,
			id_alumno:id_alumno
		}
    }).done( function( data ) {
    	location.reload();
	});
}


function mostraLista()
{
	console.log("F:mostrarLista");
	$(".lista").show(500);
	$("#div_mensaje").hide(500);	
}