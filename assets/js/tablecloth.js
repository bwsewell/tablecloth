// tablecloth.js
// copyright brian sewell
// https://github.com/bwsewell/tablecloth

(function( $ ){
	$.fn.tablecloth = function(options) {
	  
    var defaults = { 
			theme: "default", // "none","default","clean","simple"
			customClass: "",
			bordered: false,
			condensed: false,
			striped: false,
			strip: false,
			blacklist: ["style","class","cellpadding","cellspacing","border","bgcolor","align"],
			sortable: false,
			searchable: false
	  };
	  	
	 	var opts = $.extend(defaults, options);
	 	
	 	// Get rid of all inline styling and css classes for all table attributes
	 	if (opts.strip) {
	 	  
	 	  for each (var b in opts.blacklist) {
	 	    this.attr(b,"")
          .removeAttr(b);
	 	  }
 	      
	 	  this.find("*").each(function() {
	 	    for each (var b in opts.blacklist) {
  	 	    $(this).attr(b,"")
            .removeAttr(b);
  	 	  }
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