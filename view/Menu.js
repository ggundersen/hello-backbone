App.View.Menu = Backbone.View.extend({

	className: 'menu',

	initialize: function(options) {
		this.parentEl = options.parentEl;
	},
	
	render: function() {
		$(this.parentEl).append(this.el);
		$(this.el).append(
			'<h3>White Elephant</h3>' +
			'<span class="menu">' + 
				'<button class="btn-add-player">Add player</button>' +
				'<button class="btn-shuffle">Shuffle</button>' +
			'</span>'
		);
	},

	addRefreshButton: function() {
		var $menu = $(this.el).find('.menu');

		$(this.el).find('.menu button').remove();
		$(this.el).find('.menu').append(
			'<button class="btn-refresh">Refresh</button>'
		);
	}

});