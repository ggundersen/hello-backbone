App.View.AddPlayerWindow = BaseWindow.extend({

	className: 'window',

	events: {
		'click button.btn-close' : 'cancelWindow',
		'click input.btn-submit' : 'submitPlayerInfo'
	},

	initialize: function(options) {
		this.parentEl = options.parentEl;
		$(this.el).html(
			'<div>' +
				'<h4>Add a user.</h4>' +
				'<form>' +
					'<label>Name</label>' +
					'<input class="name"></input>' +
					'<label>Age <span class="optional">(optional)</span></label>' +
					'<input class="age"></input>' +
					'<label>Gender <span class="optional">(optional)</span></label>' +
					'<input type="radio" name="gender" class="gender" value="female">Female</input>' +
					'<input type="radio" name="gender" class="gender" value="male">Male</input>' +
					'<input type="submit" class="btn-submit" value="Add"></input>' +
					'<button class="btn-close">Cancel</button>' +
				'</form>' +
			'</div>'
		);
		$(this.parentEl).append(this.el);
	},

	getPlayerInfo: function() {
		var config = {
			name: $('input.name').val() || '',
			age: $('input.age').val() || '',
			gender: $('input:radio[name=gender]:checked').val() || ''
		};

		if ( !this.isValidPlayerInfo(config) ) return;
		return config;
	},

	isValidPlayerInfo: function(config) {
		if (config.name === '') {
			this.notifyUser('Please provide a name');
			return;
		} else if (config.age !== '' && isNaN(config.age)) {
			this.notifyUser("'Age' must be a number");
			return;
		}
		return true;
	},

	submitPlayerInfo: function(evt) {
		evt.preventDefault();

		var config = this.getPlayerInfo(),
			giver,
			that = this;

		if (config) {
			giver = new App.Model.Giver(config);
			this.collection.add(giver);
			this.resetWindow();
		}
	}

});