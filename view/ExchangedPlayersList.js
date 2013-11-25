App.View.ExchangedPlayersList = Backbone.View.extend({

	id: 'assignments',

	tagName: 'table',

	events: {},

	initialize: function(options) {
		this.parentEl = options.parentEl;

		$(this.el).append(
			'<thead>' +
				'<tr>' +
					'<td>Giver</td>' +
					'<td>Receiver</td>' +
				'</tr>' +
			'</thead>'
		);
		$(this.parentEl).append(this.el);
	},

	render: function(collection) {
		console.log('exchanged players list');

		var players = collection.models;

		_.each(players, function(key, i) {
			console.log(players[i]);
			$(this.el).find('thead').append(
				'<tbody>' +
					'<tr>' +
						'<td>' + players[i].get('name') + '</td>' +
						'<td>' + players[i].get('receiver') + '</td>' +
					'</tr>' +
				'</tbody>'
			);
		});
	}

});