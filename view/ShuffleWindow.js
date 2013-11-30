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
					'<label>Shuffle by gender' +
						'<input type="radio" name="gender" class="gender" value="yes">Yes</input>' +
						'<input type="radio" name="gender" class="gender" value="no">No</input>' +
					'</label>' +
					'<input type="submit" class="btn-submit" value="Shuffle"></input>' +
					'<button class="btn-close">Cancel</button>' +
				'</form>' +
			'</div>'
		);
		$(this.parentEl).append(this.el);
	},

	getFilteredPlayers: function(config) {
		var result = [];

		if ( !_.isUndefined(config.age) && !_.isUndefined(config.gender) ) {
		//	this.collection.reset( this.collection.where( config ) );
		}

		return result;
	},

	getUserOptions: function() {
		var gender = $('.gender:checked').val(),
			result = {};

		if (age) { result.age = age; }
		if (gender) { result.gender = gender; }

		return result;
	},

	runAlgorithm: function(evt) {
		evt.preventDefault();

		console.log('as input');
		console.log(this.collection);

		var playersArray = this.getFilteredPlayers( this.getUserOptions() );
		console.log('filter');
		console.log(this.collection);
		
		this.collection.reset( App.Algorithm.Shuffle( this.collection.models ) );
		console.log('');
		console.log(this.collection);
		
		this.resetWindow();
	}

});