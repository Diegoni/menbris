$("#agregar_alumno").click(function() {
	var url_back = getUrl();
	var alumno = $("#alumno").val();
	var codigo = "";
	
	$.ajax({
		type: "POST",
    	url: url_back+"index.php/Alumnos/agregarAlumno/"+alumno, 
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