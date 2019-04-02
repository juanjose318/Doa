jQuery(document).ready(function($){
	
$(".navbar-toggle").on("click",function(){
	
	$(".navbar").toggleClass("displayBlock");

	})
$(".lineUp").on("click",function(){

	
	$(".dropdown-menu").toggleClass("displayBlock");
	
});
	$(".Info").on("click",function(){
		

		$(".dropdown-menu1").toggleClass("displayBlock");

	});
	$(".over").on("click",function(){


		$(".dropdown-menu2").toggleClass("displayBlock");

	});

});
	

	
