App.View.ShuffleWindow = BaseWindow.extend({

	className: 'window',

	events: {
		'click input.btn-submit' : 'runAlgorithm',
	},

	initialize: function(options) {
		this.parentEl = options.parentEl;
		
		// Setting the HTML of `this.el`, div#add-player.
		$(this.el).html(
			'<div>' +
				'<h4>Shuffle settings.</h4>' +
				'<form>' +
				'</form>' +
				'<input type="submit" class="btn-submit" value="Add"></input>' +
				'<button class="btn-close">Cancel</button>' +
			'</div>'
		);

		// Adding div#add-player to div#content, which was passed into
		// `initialize`.
		$(this.parentEl).append(this.el);
	},

	runAlgorithm: function() {
		var that = this;

		var test = new App.Model.Shuffle({
			collection: that.collection
		});

		console.log(test.attributes.collection);
	}

});