$("#agregar_alumno").click(function() {
	var alumno = $("#alumno").val();
	var codigo = "";
	
	$.ajax({
		type: "POST",
    	//url: "http://www.menbris.com.ar/menbrisBack/index.php/Alumnos/agregarAlumno/"+alumno,
	    url: "http://localhost/benbrisBack/index.php/Alumnos/agregarAlumno/"+alumno, 
	    contentType: "application/json; charset=utf-8",
	    dataType: "json",
	    success: function(data) {
	    	codigo = data.codigo;
	    	$("#codigo").val(codigo);
	    	$("#agregar_alumno").hide();
	    },
	    error: function(data){
	        console.debug(data);

	    }
	});
});