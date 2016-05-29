$(document).ready(function() {
	//Logo hover image 
	function logoHov() {
		$('.logo').hover(
			function() {
				$('.logo img').attr("src", "img/logohov.jpg");
			},
			function() {
				$('.logo img').attr("src", "img/logo.jpg");
			}
		);
	};
	
	//Animates the skills progress when active
	function progAnimation() {
		$('.prg-html5').width("95%");
		$('.prg-xml').width("80%");
		$('.prg-css3').width("85%");
		$('.prg-bootstrap').width("70%");
		$('.prg-javascript').width("75%");
		$('.prg-jquery').width("80%");
		$('.prg-angularjs').width("40%");
		$('.prg-php').width("30%");
		$('.prg-photoshop').width("75%");
		$('.prg-office').width("85%");
		$('.prg-github').width("70%");
		$('.prg-wordpress').width("80%");
		$('.prg-windows').width("95%");
		$('.prg-mac').width("80%");
		$('.prg-ubuntu').width("30%");
	};
	
	//Hover effect over each skill set
	function skillsHov() {
		$('#skills-tbl tr').hover(
			function() {
				$(this).children("td").children("img").attr("src", "img/progresshov.png");
			},
			function() {
				$(this).children("td").children("img").attr("src", "img/progress.png");
			}
		);
	};
	
	//Keeps the project link active when selected
	function projLinks() {
		$('.project-list a').click(function() {
			$(this).css("background", " linear-gradient(to right, rgba(0,0,0,0.8) 34%,rgba(0,0,0,0) 100%)")
						.css("color", "#FFF");
			$('.project-list a').not(this).css("background", "none").css("color", "#000");
		});
	};
	//Set Defaults on page load
	$('.project-list a:nth-of-type(1)').css("background", " linear-gradient(to right, rgba(0,0,0,0.8) 34%,rgba(0,0,0,0) 100%)").css("color", "#FFF");
	/* -----------------------------------------------------------------------------------	*/	
	$('#skills').click(function() {
		progAnimation();
	});
	
	logoHov();
	skillsHov();
	projLinks();
	
});