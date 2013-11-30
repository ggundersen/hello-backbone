App.View.ShuffledList = Backbone.View.extend({

	id: 'assignments',

	tagName: 'table',

	events: {},

	initialize: function(options) {
		this.parentEl = options.parentEl;
		this.mainThis = options.mainThis;
	},

	appendPlayers: function(players) {
		var that = this;

		_.each(players, function(player) {
			$(that.el).find('tbody').append(
				'<tr>' +
					'<td>' + player.get('name') + '</td>' +
					'<td>' + player.get('receiver') + '</td>' +
				'</tr>'
			);
		});
	},

	render: function() {
		$(this.parentEl).append(this.el);
		$(this.el).append(
			'<thead>' +
				'<tr>' +
					'<td>Giver</td>' +
					'<td>Receiver</td>' +
				'</tr>' +
			'</thead>' + 
			'<tbody></tbody>'
		);
	},

});