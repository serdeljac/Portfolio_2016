$(document).ready(function() {

	var title = document.querySelector('.displayTitle').innerHTML;
	var titleArray = title.split("");
	$('.displayTitle').empty();


	//Appends each character to it's own DIV
	function appendTitle() {
		for (i = 0; i < titleArray.length; i++) { 
			var delay = i/10;
			var inc = i+1;
			//Delete forward slashes below to randomize the delays

			if (titleArray[i] == titleArray[i].toUpperCase()) {
				$('.displayTitle').append("<div class='titlecap'>" + titleArray[i] + "</div>");
			}else {
				$('.displayTitle').append("<div>" + titleArray[i] + "</div>");
			};
			
			$('.displayTitle div:nth-of-type(' + inc + ')').removeAttr("style")
																				.css("animation-delay", delay + "s")
																				.addClass('rise'); 
			$('.titlecap:nth-of-type(1n+2)').css("margin-left", "30px");
			
		}
	};
	appendTitle();
	

	
	
	
	
	
	
});











