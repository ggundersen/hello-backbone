App.View.PlayersList = Backbone.View.extend({

	id: 'participants',

	tagName: 'table',

	initialize: function(options) {
		this.parentEl = options.parentEl;
		this.collection.on('add', this.appendPlayer, this);

		$(this.parentEl).append(this.el);
		$(this.el).append(
			'<thead>' +
				'<tr>' +
					'<td class="first">Name</td>' +
					'<td class="last">Gender</td>' +
				'</tr>' +
			'</thead>'
		);
	},

	appendPlayer: function() {
		var latestModel = this.collection.at(this.collection.length - 1).attributes;

		$(this.el).show();
		$(this.el).append(
			'<tr>' +
				'<td class="first">' + latestModel.name + '</td>' +
				'<td class="last">' + latestModel.gender + '</td>' +
			'</tr>'
		);
	},

	unrender: function() {
		$(this.el).hide();
	}

});