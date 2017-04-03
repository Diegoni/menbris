$(function() {
	var index 				= '<li><a href="index.html">Bandeja de entrada</a></li>';
	var registrar_alumno 	= '<li><a href="registrar_alumnos.html">Registrar Alumno</a></li>';
	var editar_alumno 		= '<li><a href="editar_alumnos.html">Editar Alumno</a></li>';
	
	$(".menu").append(index+editar_alumno+registrar_alumno);
});     