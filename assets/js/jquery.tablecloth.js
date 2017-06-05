// tablecloth.js
// copyright brian sewell
// https://github.com/bwsewell/tablecloth
//
// v1.0.0
// May 4, 2012 14:20
// Refactored by Larry Battle <https://github.com/LarryBattle>, <http://bateru.com/news>
(function ($) {
	// taken from http://stackoverflow.com/questions/4183051/how-to-remove-attributes-at-a-time-using-jquery
	$.fn.removeAttrs = function () {
		var args = Array.prototype.slice.call(arguments),
		attr, i = 0;
		if (args.length == 1) {
			args = $.isArray(args[0]) ? args[0] : args[0].split(" ");
		}
		while (attr[i]) {
			this.removeAttr(attr);
			i++;
		}
		return this;
	};
	var addClassIfPropExist = function ($el, obj, prop, className) {
		if (obj[prop]) {
			$el.addClass(className || obj[prop]);
		}
	};
	var process = function ($el, opts) {
		$el = $($el);
		// Before we remove any attributes, let's fix a few things up
		$el.find("[align='right']").addClass("right");
		$el.find("[align='center']").addClass("center");
		$el.find("[align='nowrap']").css('white-space', 'nowrap');
		// Get rid of all inline styling and deprecated table attributes
		// Also get rid of any current classes being applied to the <table> element
		if (opts.clean) {
			$el.removeAttrs(['class', 'style', 'cellpadding', 'cellspacing', 'bgcolor', 'align', 'width', 'nowrap']);
			$el.find(opts.cleanElements).removeAttrs(['class', 'style', 'cellpadding', 'cellspacing', 'bgcolor', 'align', 'width', 'nowrap']);
		}
		$el.addClass("table");
		addClassIfPropExist($el, opts, "theme", "table-" + (opts.theme || "").toLowerCase());
		addClassIfPropExist($el, opts, "customClass");
		addClassIfPropExist($el, opts, "condensed", "table-condensed");
		addClassIfPropExist($el, opts, "bordered", "table-bordered");
		addClassIfPropExist($el, opts, "striped", "table-striped");
		if (opts.sortable) {
			$el.addClass("table-sortable");
			if (jQuery().tablesorter) {
				$el.tablesorter({
					cssHeader : "headerSortable"
				});
			}
		}
	};
	$.fn.tablecloth = function (options) {
		var $el = $(this),
		opts = $.extend($.fn.tablecloth.defaults, options);
		process($el, opts);
		return $el;
	};
	$.fn.tablecloth.defaults = {
		theme : "default",
		customClass : "",
		bordered : false,
		condensed : false,
		striped : false,
		sortable : false,
		clean : false,
		cleanElements : "*"
	};
})(jQuery);
