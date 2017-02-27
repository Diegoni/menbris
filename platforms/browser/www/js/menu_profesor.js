$(function() {
	var index 				= '<li><a href="index.html">Bandeja de entrada</a></li>';
	var registrar_curso		= '<li><a href="registrar_curso.html">Registrar curso</a></li>';
	var cursos_alumnos		= '<li><a href="cursos_alumnos.html">Cursos Alumnos</a></li>';
	var registrar_mensaje 	= '<li><a href="registrar_mensaje.html">Registrar Mensaje</a></li>';
	
	$(".menu").append(index+registrar_curso+cursos_alumnos+registrar_mensaje);
});     