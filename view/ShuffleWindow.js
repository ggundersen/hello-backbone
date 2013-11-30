App.View.ShuffleWindow = BaseWindow.extend({

	events: {
		'click button.btn-close' : 'cancelWindow',
		'click input.btn-submit' : 'runAlgorithm'
	},

	initialize: function(options) {
		this.parentEl = options.parentEl;
		$(this.el).html(
			'<div class="window-container">' +
				'<h4>Shuffle settings.</h4>' +
				'<form>' +
					'<label>Shuffle by age <span class="optional">(optional)</span></label>' +
					'<input type="radio" name="byAge" class="btn-byAge" value="adults">Adults</input>' +
					'<input type="radio" name="byAge" class="btn-byAge" value="children">children</input>' +
					'<label>Shuffle by sex <span class="optional">(optional)</span></label>' +
					'<input type="radio" name="byGender" class="btn-byGender" value="male">Male</input>' +
					'<input type="radio" name="byGender" class="btn-byGender" value="female">Female</input>' +
					'<input type="submit" class="btn-submit" value="Shuffle"></input>' +
					'<button class="btn-close">Cancel</button>' +
				'</form>' +
			'</div>'
		);
		$(this.parentEl).append(this.el);
	},

	filterPlayers: function(config) {
		var query = {};

		if (config.byAge) {
			query['age'] = config.byAge;
		}
		if (config.byGender) {
			query['gender'] = config.byGender;
		}

		return this.collection.where( query );
	},

	getShuffleInfo: function() {
		var config = {
			byAge: $('.btn-byAge:checked'),
			byGender: $('.btn-byGender:checked')
		};

		return {
			byAge: config.byAge.val(),
			byGender: config.byGender.val()
		};
	},

	runAlgorithm: function(evt) {
		evt.preventDefault();

		var config = this.getShuffleInfo(),
			matchedPlayers,
			players,
			shuffle,
			that = this;

		if (config) {
			matchedPlayers = new App.Model.Shuffle({
				collection: new App.Collection.Players(
					this.filterPlayers(config)
				)
			});

			console.log(matchedPlayers);
			this.resetWindow();
		}
	}

});