App.View.ShuffledList = Backbone.View.extend({

	id: 'assignments',

	tagName: 'table',

	events: {},

	initialize: function(options) {
		this.parentEl = options.parentEl;
	},

	/*render: function(collection) {
		var players = collection.models,
			that = this;

		$(this.el).append(
			'<thead>' +
				'<tr>' +
					'<td>Giver</td>' +
					'<td>Receiver</td>' +
				'</tr>' +
			'</thead>' + 
			'<tbody></tbody>'
		);
		$(this.parentEl).append(this.el);
		_.each(players, function(key, i) {
			$(that.el).find('tbody').append(
				'<tr>' +
					'<td>' + players[i].get('name') + '</td>' +
					'<td>' + players[i].get('receiver').get('name') + '</td>' +
				'</tr>'
			);
		});
	}*/

});