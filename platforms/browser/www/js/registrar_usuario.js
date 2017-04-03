$(document).ready(function()
{
	var url = getUrl();
    $("#errorMsg").hide();
    $("#btnAceptar").click(function()
    {
        var user = $("#txtuser").val();
        var pass = $("#txtpass").val();
        var perfil = $("#txtperfil").val();
        
        if(pass.length < 4)
        {
        	$.mobile.changePage('#pageErrorPass', 'pop', true, true);
        }else
        {
        	var url_post = url+'index.php/Usuarios/registrar/';
        
	        $.post(url_post, 
	        	{ 
	        		user : user, 
	        		pass : pass,
	        		perfil : perfil
	        	},function(respuesta)
	        {
	        	console.log(respuesta);
	        	console.log(perfil);
	            if (respuesta) 
	            {
	            	if(perfil == 'Padre')
	            	{
	            		$.mobile.changePage("padre/index.html");
	            	}else
	            	{
	            		$.mobile.changePage("profesor/index.html");
	            	}
	            }else
	            {
	                $.mobile.changePage('#pageError', 'pop', true, true);
	                /*$("#errorMsg").fadeIn(300);
	                $("#errorMsg").css("display", "block");*/
	            }
	        });
        }
    });
});
