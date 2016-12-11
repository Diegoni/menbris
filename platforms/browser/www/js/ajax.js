$.ajax({
    type:"GET", 
    url: "http://www.menbris.com.ar/menbrisBack/index.php/Mensajes/getMensajes/1", 
    success: function(data) 
    {
    	$.each(data, function(index, element) {
    	 	$(".lista").append('<li class="ui-first-child"><a href="index.html" class="ui-btn ui-btn-icon-right ui-icon-carat-r"><h2>'+element.alumno+'</h2><p><strong>'+element.titulo+'</strong></p><p>'+element.mensaje+'</p><p class="ui-li-aside"><strong>6:24</strong>PM</p></a></li>');
        });
		
    }, 
    
    error: function(jqXHR, textStatus, errorThrown) 
    {
		//alert(errorThrown);
	},
	dataType: "json"
});