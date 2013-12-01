App.View.AddPlayerWindow = BaseWindow.extend({

	events: {
		'click button.btn-close' : 'cancelWindow',
		'click button.btn-submit' : 'submitPlayerInfo'
	},

	initialize: function(options) {
		$('body').append(this.el);
		$(this.el).html(
			'<h4>Add a user</h4>' +
			'<form id="add-player">' +
				'<label>' +
					'<span class="label-title">Name:</span>' +
					'<input class="name"></input>' +
				'</label>' +
				'<label>' +
					'<span class="label-title">Gender <span class="optional"> (optional):</span></span>' +
					'<input type="radio" name="gender" class="gender" value="female">Female</input>' +
					'<input type="radio" name="gender" class="gender" value="male">Male</input>' +
				'</label>' +
				'<button class="btn-submit">Add</input>' +
				'<button class="btn-close">Cancel</button>' +
				'<span class="error"></span>' +
			'</form>'
		);
		$('body').append('<div class="overlay"></div>');
	},

	getPlayerConfig: function() {
		return {
			name: $('input.name').val() || '',
			gender: $('input:radio[name=gender]:checked', '#add-player').val() || ''
		};
	},

	isValidConfig: function(config) {
		return config.name !== '';
	},

	submitPlayerInfo: function(evt) {
		evt.preventDefault();

		var config = this.getPlayerConfig(),
			giver;

		if ( !this.isValidConfig(config) ) {
			this.notifyUser('Please provide a name!');
		} else {
			giver = new App.Model.Giver(config);
			this.collection.add(giver);
			this.resetWindow();
		}
	}

});