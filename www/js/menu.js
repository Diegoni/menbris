$(function() {
	var index 				= '<li><a href="index.html">Bandeja de entrada</a></li>';
	var registrar_alumno 	= '<li><a href="registrar_alumno.html">Registrar Alumno</a></li>';
	var editar_alumno 		= '<li><a href="editar_alumnos.html">Editar Alumno</a></li>';
	var registrar_mensaje 	= '<li><a href="registrar_mensaje.html">Registrar Mensaje</a></li>';
	
	$(".menu").append(index+registrar_alumno+editar_alumno);
});     