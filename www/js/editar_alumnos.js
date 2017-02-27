$(function() {
	var url_back = getUrl();
	$.ajax({
	    type:"GET", 
	    url: url_back+"index.php/Alumnos/getAlumnos/1", 
	    success: function(data) 
	    {
	    	$.each(data, function(index, element) {
	    	 	$(".lista").append('<li><a href="index.html" class="ui-btn ui-btn-icon-right ui-icon-carat-r"><h2>'+element.alumno+'</h2></a></li>');
	        });
			
	    }, 
	    
	    error: function(jqXHR, textStatus, errorThrown) 
	    {
			//alert(errorThrown);
		},
		dataType: "json"
	});
});