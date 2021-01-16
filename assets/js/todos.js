// check off todos when clicked
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");

});
// click on X to delete
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
$("input[type='text']").keypress(function(event){
	if(event.which===13)
	{
		// get new Todo
		var todoText= $(this).val();
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span>X</span>"+ todoText+"</li>");
	}

})