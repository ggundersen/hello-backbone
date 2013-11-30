App.View.PlayersList = Backbone.View.extend({

	id: 'participants',

	tagName: 'table',

	initialize: function(options) {
		this.parentEl = options.parentEl;

		// If we do not pass in `this`, then `this` will refer to 
		// the collection in the callback, `appendPlayer`, which
		// would be the collection itself.
		this.collection.on('add', this.appendPlayer, this);

		$(this.el).append(
			'<thead>' +
				'<tr>' +
					'<td>Name</td><td>Gender</td>' +
				'</tr>' +
			'</thead>'
		);
		$(this.parentEl).append(this.el);
	},

	appendPlayer: function() {
		var latestModel = this.collection.at(this.collection.length - 1).attributes;

		$(this.el).append(
			'<tr>' +
				'<td>' + latestModel.name + '</td>' +
				'<td>' + latestModel.gender + '</td>' +
			'</tr>'
		);
	},

	unrender: function() {
		$(this.el).hide();
	}

});