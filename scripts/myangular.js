(function(){

  var app = angular.module('portnav', []);
  
  app.controller("PanelController", function() {
	  
	//Set initial value on load page
	this.tab = 3;
	
	//Change the value of tab based on selection in NAV
	this.selectTab = function(setTab) {
		this.tab = setTab;
	};

	//Return the value of Tab for comparison
	this.isSelected = function(checkTab) {
		return this.tab === checkTab;
	};
  });
  
  app.controller("ProjectController", function() {
	  
	//Set initial value on load page
	this.tab = 1;
	
	//Change the value of tab based on selection in NAV
	this.selectTab = function(setTab) {
		this.tab = setTab;
	};

	//Return the value of Tab for comparison
	this.isSelected = function(checkTab) {
		return this.tab === checkTab;
	};
  });
  
})();