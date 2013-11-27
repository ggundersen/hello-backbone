var BaseWindow = Backbone.View.extend({

	render: function() {
		$(this.el).show();
	},

	cancelWindow: function(evt) {
		evt.preventDefault();
		this.resetWindow();
	},

	notifyUser: function(message) {
		alert(message);
	},

	resetWindow: function() {
		$(this.el).hide();
		$(this.el).find('form')[0].reset();
	}

});