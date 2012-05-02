// tablecloth.js
// copyright brian sewell
// https://github.com/bwsewell/tablecloth
//
// v0.0.3
// May 2, 2012 14:05

(function( $ ){
	$.fn.tablecloth = function(options) {
	  
    var defaults = { 
			theme: "default", // "none","default","clean","simple"
			customClass: "",
			bordered: false,
			condensed: false,
			striped: false,
			sortable: false,
			searchable: false,
			clean: false,
			cleanElements: "thead,tbody,tr,th,td"
	  };
	  
	 	var opts = $.extend(defaults, options);

	 	// Get rid of all inline styling and css classes for all table attributes
	 	if (opts.clean) {
	 	  
	 	  this.removeAttr('style')
	 	    .removeAttr('class')
	 	    .removeAttr('cellpadding')
	 	    .removeAttr('cellspacing')
	 	    .removeAttr('bgcolor')
	 	    .removeAttr('align')
	 	    .removeAttr('width');
 	      
	 	  this.find(opts.cleanElements).each(function() {
	 	    $(this).removeAttr('style')
	 	      .removeAttr('class')
  	 	    .removeAttr('cellpadding')
  	 	    .removeAttr('cellspacing')
  	 	    .removeAttr('bgcolor')
  	 	    .removeAttr('align')
  	 	    .removeAttr('width');
	 	  });
	 	  
	 	}
	 	
	 	// Set the table theme accordingly
	 	if (opts.theme == "default") {
	 	  this.addClass("table");
	 	}
	 	else if (opts.theme == "clean") {
	 	  this.addClass("table table-clean");
	 	}
	 	else if (opts.theme == "simple") {
	 	  this.addClass("table table-simple");
	 	}
	 	else if (opts.theme == "stats") {
	 	  this.addClass("table table-stats");
	 	}
	 	
	 	// Set the table theme accordingly
	 	if (opts.customClass != "") {
	 	  this.addClass(opts.customClass);
	 	}
	 	
	 	// Set the table options accordingly
	 	if (opts.condensed) {
	 	  this.addClass("table-condensed");
	 	}
	 	if (opts.bordered) {
	 	  this.addClass("table-bordered");
	 	}
	 	if (opts.striped) {
	 	  this.addClass("table-striped");
	 	}
	 	if (opts.sortable) {
	 	  this.addClass("table-sortable");
	 	}
	 	if (opts.searchable) {
	 	  this.addClass("table-searchable");
	 	}
	 	
  };

})( jQuery );