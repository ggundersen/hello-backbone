App.View.AddPlayerWindow = BaseWindow.extend({

	events: {
		'click button.btn-close' : 'cancelWindow',
		'click input.btn-submit' : 'submitPlayerInfo'
	},

	initialize: function(options) {
		this.parentEl = options.parentEl;
		$(this.el).html(
			'<div class="window-container">' +
				'<h4>Add a user.</h4>' +
				'<form>' +
					'<label>Name</label>' +
					'<input class="name"></input>' +
					'<label for="age">Age ' +
						'<span class="optional">(optional)</span>' +
						'<span class="error"></span>' +
					'</label>' +
					'<select class="age" size="5">' +
						this.getAgeOptions() +
					'</select>' +
					'<label>Gender ' +
						'<span class="optional">(optional)</span>' +
						'<span class="age"></span>' +
					'</label>' +
					'<input type="radio" name="gender" class="gender" value="female">Female</input>' +
					'<input type="radio" name="gender" class="gender" value="male">Male</input>' +
					'<input type="submit" class="btn-submit" value="Add"></input>' +
					'<button class="btn-close">Cancel</button>' +
				'</form>' +
			'</div>'
		);
		$(this.parentEl).append(this.el);
	},

	getAgeOptions: function() {
		return _.map(_.range(1, 121), function(i) {
			return '<option>' + i + '</option>';
		}).join('');
	},

	getPlayerInfo: function() {
		var config = {
			name: $('input.name').val() || '',
			age: $('select.age').val() || '',
			gender: $('input:radio[name=gender]:checked').val() || ''
		};

		if ( !this.isValidPlayerInfo(config) ) return;
		return config;
	},

	isValidPlayerInfo: function(config) {
		var $err = $(this.el).find('.error');

		if (config.name === '') {
			$err.text('Please provide a name');
			return;
		}
		$err.empty();
		return true;
	},

	submitPlayerInfo: function(evt) {
		evt.preventDefault();

		var config = this.getPlayerInfo(),
			giver;

		if (config) {
			giver = new App.Model.Giver(config);
			this.collection.add(giver);
			this.resetWindow();
		}
	}

});