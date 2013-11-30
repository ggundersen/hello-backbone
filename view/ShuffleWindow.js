App.View.ShuffleWindow = BaseWindow.extend({

	events: {
		'click button.btn-close' : 'cancelWindow',
		'click input.btn-submit' : 'runAlgorithm'
	},

	initialize: function(options) {
		$('body').append(this.el);
		$(this.el).html(
			'<h4>Shuffle settings.</h4>' +
			'<form>' +
				'<label>Shuffle by gender' +
					'<input type="radio" name="gender" class="gender" value="yes">Yes</input>' +
					'<input type="radio" name="gender" class="gender" value="no">No</input>' +
				'</label>' +
				'<input type="submit" class="btn-submit" value="Shuffle"></input>' +
				'<button class="btn-close">Cancel</button>' +
			'</form>'
		);
	},

	getByGender: function(coll, gen) {
		return coll.where({ gender: gen });
	},

	getFilteredPlayers: function() {
		var options = this.getUserOptions(),
			result;

		if ( _.isUndefined(options.gender) || options.gender === 'no' ) {
			result = [ this.collection.models ];
		} else {
			result = [
				this.getByGender(this.collection, 'male'),
				this.getByGender(this.collection, 'female'),
			];
		}

		return result;
	},

	getUserOptions: function() {
		return {
			gender: $('.gender:checked').val()
		};
	},

	runAlgorithm: function(evt) {
		evt.preventDefault();

		var playersByGroup = this.getFilteredPlayers(),
			result = [];

		if (playersByGroup.length === 1) {
			result = App.Algorithm.Shuffle( playersByGroup[0] );
		} else {
			result = _.map(playersByGroup, function(group) {
				return App.Algorithm.Shuffle( group );
			});
		}
		
		this.trigger('shuffle', result);

		this.resetWindow();
	}

});