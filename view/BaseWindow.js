var BaseWindow = Backbone.View.extend({

	className: 'window',

	render: function() {
		$(this.el).show();
	},

	cancelWindow: function(evt) {
		evt.preventDefault();
		this.resetWindow();
	},

	resetWindow: function() {
		$(this.el).hide();
		$(this.el).find('form')[0].reset();
	}

});