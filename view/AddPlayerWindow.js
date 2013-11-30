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
					'<label>Name:' +
						'<span class="error"></span>' +
						'<input class="name"></input>' +
					'</label>' +
					'<label>Age <span class="optional"> (optional):</span>' +
						'<input type="radio" name="age" class="age" value="adult">adult</input>' +
						'<input type="radio" name="age" class="age" value="child">child</input>' +
					'</label>' +		
					'<label>Gender <span class="optional"> (optional):</span>' +
						'<input type="radio" name="gender" class="gender" value="female">Female</input>' +
						'<input type="radio" name="gender" class="gender" value="male">Male</input>' +
					'</label>' +
					'<input type="submit" class="btn-submit" value="Add"></input>' +
					'<button class="btn-close">Cancel</button>' +
				'</form>' +
			'</div>'
		);
		$(this.parentEl).append(this.el);
	},

	getPlayerConfig: function() {
		return {
			name: $('input.name').val() || '',
			age: $('select.age').val() || '',
			gender: $('input:radio[name=gender]:checked').val() || ''
		};
	},

	isValidConfig: function(config) {
		return config.name !== '';
	},

	notifyUser: function(message) {
		$(this.el).find('.error').text(message);	
	},

	submitPlayerInfo: function(evt) {
		evt.preventDefault();

		var config = this.getPlayerConfig(),
			giver;

		if ( !this.isValidConfig(config) ) {		
			this.notifyUser('Please provide a name');
		} else {
			console.log(config);
			giver = new App.Model.Giver(config);
			this.collection.add(giver);
			this.resetWindow();
		}
	}

});