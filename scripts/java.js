$(document).ready(function() {

	//Variables for Section
	var home = $('section:nth-of-type(1)');
	var skills = $('section:nth-of-type(2)');
	var projects = $('section:nth-of-type(3)');
	var about = $('section:nth-of-type(4)');
	var contact = $('section:nth-of-type(5)');
	//Variables for Navigation
	var nav_home = $('nav ul li:nth-of-type(1) a');
	var nav_skills = $('nav ul li:nth-of-type(2) a');
	var nav_projects = $('nav ul li:nth-of-type(3) a');
	var nav_about = $('nav ul li:nth-of-type(4) a');
	var nav_contact = $('nav ul li:nth-of-type(5) a');
	//For default CSS Styles
	var nav = $('nav ul li a');	
	nav_home.css("color", "#fff");

	
	//Detect if browser is IE
	function checkIE() {
		var ms = window.navigator.userAgent.indexOf("MSIE ");
		if (ms > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  
		{	$('html').addClass('ie');    }
		return false;
	};

	//Reveals the project name and centers text
	function projHov() {
		$('.tile').hover(
			function() {
				$(this).children('.tile_hov').fadeIn();
			},
			function() {
				$(this).children('.tile_hov').fadeOut();
			}
		);
	};
	
	function chngSec() {
		$('.dir-right').click(function() {
			nav.removeAttr('style');
			$('section').fadeOut(200);
			if (home.css("display") === 'block') {
				skills.fadeIn(200);
				nav_skills.css("color", "#fff");
			} else if (skills.css("display") === 'block') {
				projects.fadeIn(200);
				nav_projects.css("color", "#fff");
			} else if (projects.css("display") === 'block') {
				about.fadeIn(200);
				nav_about.css("color", "#fff");
			} else if (about.css("display") === 'block') {
				contact.fadeIn(200);
				nav_contact.css("color", "#fff");
			}else {
				home.fadeIn(200);
				nav_home.css("color", "#fff");
			}
		});
		
		$('.dir-left').click(function() {
			nav.removeAttr('style');
			$('section').fadeOut(200);
			if (contact.css("display") === 'block') {
				about.fadeIn(200);
				nav_about.css("color", "#fff");
			} else if (about.css("display") === 'block') {
				projects.fadeIn(200);
				nav_projects.css("color", "#fff");
			} else if (projects.css("display") === 'block') {
				skills.fadeIn(200);
				nav_skills.css("color", "#fff");
			} else if (skills.css("display") === 'block') {
				home.fadeIn(200);
				nav_home.css("color", "#fff");
			} else {
				contact.fadeIn(200);
				nav_contact.css("color", "#fff");
			}
		});
	};
	
	function navClick() {
		nav_home.click(function() {
			nav.removeAttr('style');
			nav_home.css("color", "#fff");
			$('section').fadeOut();
			home.fadeIn();
		});
		
		nav_skills.click(function() {
			nav.removeAttr('style');
			nav_skills.css("color", "#fff");
			$('section').fadeOut();
			skills.fadeIn();
		});
		
		nav_projects.click(function() {
			nav.removeAttr('style');
			nav_projects.css("color", "#fff");
			$('section').fadeOut();
			projects.fadeIn();
		});
		
		nav_about.click(function() {
			nav.removeAttr('style');
			nav_about.css("color", "#fff");
			$('section').fadeOut();
			about.fadeIn();
		});
		
		nav_contact.click(function() {
			nav.removeAttr('style');
			nav_contact.css("color", "#fff");
			$('section').fadeOut();
			contact.fadeIn();
		});
	};
	
	function subnav() {
		$('.hambmenu').click(function() {
			if ($(this).hasClass("inactive")) {
				$(this).removeClass("inactive");
				//$('main').css("left", "200px");
				$('nav').css("transition", "all .23s ease").css("left", "0px");
			}else{
				$(this).addClass("inactive");
				//$('main').css("left", "0px");
				//$('main').removeAttr('style');
				//$('nav').css("left", "-200px");
				$('nav').removeAttr('style');
			}
		});
		$('nav ul li a').click(function() {
			if ($(window).width() < 768) {
				$('.hambmenu').addClass("inactive");
				$('main').removeAttr('style');
				$('nav').removeAttr('style');
			}else {
				return false;
			}
		});
		
		
	};
	

	checkIE();
	subnav();
	projHov();
	navClick();
	chngSec();
	
	
	//Changes initial value when window size changes
	$(window).resize(function() {

	});
	
	//Changes when scrolled to certain point
	$(window).scroll(function() {
	});
	
});