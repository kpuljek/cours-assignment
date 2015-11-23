
function showTemplate(template, data){
	var html    = template(animals_data);
	$('#content').html(html);
}



$(document).ready(function(){
    var source   = $("#album-template").html();
    template = Handlebars.compile(source);
    
    var html = template(animals_data);
    $('#content').html(html);
    


});

