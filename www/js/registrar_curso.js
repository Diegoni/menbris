function guardar()
{
	var url = getUrl();
	var curso = $("#curso").val();
	var id_profesor = 1;
	
	$.ajax({
		url: url+"index.php/Cursos/guardarCurso/", 
		type: 'POST',
		data : {
			curso:curso,
			id_profesor:id_profesor
		}
    }).done( function( data ) {
		$.mobile.changePage("cursos_alumnos.html");
	});
}