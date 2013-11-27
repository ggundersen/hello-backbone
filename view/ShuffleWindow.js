/* View
 *
 * 'Backbone Views are almost more convention than they are actual
 * code. A View is simply a JavaScript object that represents a
 * logical chunk of UI in the DOM. This might be a single item, an
 * entire list, a sidebar or panel, or even the surrounding frame
 * which wraps your whole app. Defining a chunk of UI as a View
 * allows you to define your DOM events declaratively, without having
 * to worry about render order... and makes it easy for the view to
 * react to specific changes in the state of your models.'
 * --------------------------------------------------------------- */

App.View.ShuffleWindow = Backbone.View.extend({

	className: 'window',

	events: {
	},

	initialize: function(options) {
		this.parentEl = options.parentEl;
		
		// Setting the HTML of `this.el`, div#add-player.
		$(this.el).html(
			'<div>' +
				'<h4>Shuffle settings.</h4>' +
				'<form>' +
				'</form>' +
			'</div>'
		);

		// Adding div#add-player to div#content, which was passed into
		// `initialize`.
		$(this.parentEl).append(this.el);
	},

	render: function() {
		$(this.el).show();
	}

});