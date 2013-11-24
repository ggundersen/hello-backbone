App.View.Participants = Backbone.View.extend({

	id: 'participants',

	tagName: 'table',

	initialize: function(options) {
		this.parentEl = options.parentEl;

		// If we do not pass in `this`, then `this` will refer to 
		// the collection in the callback, `appendGiver`, which
		// would be the collection itself.
		this.collection.on('add', this.appendGiver, this);

		$(this.el).append(
			'<thead>' +
				'<tr>' +
					'<td>Name</td><td>Age</td><td>Sex</td>' +
				'</tr>' +
			'</thead>'
		);
		$(this.parentEl).append(this.el);
	},

	appendGiver: function() {
		var lastModel = this.collection.at(this.collection.length - 1);

		$(this.el).append(
			'<tr>' +
				'<td>' + lastModel.attributes.name + '</td>' +
				'<td>' + lastModel.attributes.age + '</td>' +
				'<td>' + lastModel.attributes.sex + '</td>' +
			'</tr>'
		);
	},

});