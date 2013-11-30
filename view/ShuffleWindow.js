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
					'<input type="radio" name="age" class="btn-age" value="adults">Adults</input>' +
					'<input type="radio" name="age" class="btn-age" value="children">children</input>' +
					'<label>Shuffle by sex <span class="optional">(optional)</span></label>' +
					'<input type="radio" name="gender" class="btn-gender" value="female">Female</input>' +
					'<input type="radio" name="gender" class="btn-gender" value="male">Male</input>' +
					'<input type="submit" class="btn-submit" value="Shuffle"></input>' +
					'<button class="btn-close">Cancel</button>' +
				'</form>' +
			'</div>'
		);
		$(this.parentEl).append(this.el);
	},

	filterPlayers: function(config) {
		if ( !_.isUndefined(config.age) || !_.isUndefined(config.gender) ) {
			this.collection.reset( this.collection.where( config ) );
		}
	},

	getUserOptions: function() {
		var age = $('.btn-age:checked').val(),
			gender = $('.btn-gender:checked').val(),
			result = {};

		if (age) { result.age = age; }
		if (gender) { result.gender = gender; }

		return result;
	},

	runAlgorithm: function(evt) {
		evt.preventDefault();

		console.log('as input');
		console.log(this.collection);

		this.filterPlayers( this.getUserOptions() );
		console.log('filter');
		console.log(this.collection);
		
		this.collection.reset( App.Algorithm.Shuffle( this.collection.models ) );
		console.log('shuffled');
		console.log(this.collection);
		
		this.resetWindow();
	}

});