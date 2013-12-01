App.View.ShuffledList = Backbone.View.extend({

	id: 'assignments',

	tagName: 'table',

	events: {},

	initialize: function(options) {
		this.parentEl = options.parentEl;
	},

	appendPlayers: function(players) {
		var that = this;

		_.each(players, function(player) {
			$(that.el).find('tbody').append(
				'<tr>' +
					'<td class="first">' + player.get('name') + '</td>' +
					'<td class="last">' + player.get('receiver') + '</td>' +
				'</tr>'
			);
		});
	},

	render: function() {
		$(this.parentEl).append(this.el);
		$(this.el).append(
			'<thead>' +
				'<tr>' +
					'<td class="first">Giver</td>' +
					'<td class="last">Receiver</td>' +
				'</tr>' +
			'</thead>' + 
			'<tbody></tbody>'
		);
	},

});