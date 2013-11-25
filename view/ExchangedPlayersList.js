App.View.ExchangedPlayersList = Backbone.View.extend({

	id: 'assignments',

	tagName: 'table',

	events: {},

	initialize: function(options) {
		this.parentEl = options.parentEl;
	},

	render: function(results) {
		$(this.el).append(
			'<tr>' +
				'<td>Giver</td>' +
				'<td>Receiver</td>' +
			'</tr>'
		);
		$(this.parentEl).append(this.el);
	}

});