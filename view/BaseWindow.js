var BaseWindow = Backbone.View.extend({

	className: 'window',

	cancelWindow: function(evt) {
		evt.preventDefault();
		this.resetWindow();
	},

	notifyUser: function(message) {
		//$(this.el).find('.' + className).attr('placeholder', message);
		$(this.el).find('.error').text(message);
	},

	render: function() {
		$(this.el).show();
		$('.overlay').show();
	},

	resetWindow: function() {

		$(this.el).hide();
		$('.overlay').hide();
		$(this.el).find('.error').empty();
		$(this.el).find('form')[0].reset();
	}

});