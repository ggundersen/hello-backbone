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
						'<span class="error name"></span>' +
					'</label>' +
					'<input class="age"></input>' +
					'<label>Gender ' +
						'<span class="optional">(optional)</span>' +
						'<span class="error age"></span>' +
					'</label>' +
					'<input type="radio" name="gender" class="gender" value="female">Female</input>' +
					'<input type="radio" name="gender" class="gender" value="male">Male</input>' +
					'<input type="submit" class="btn-submit" value="Add"></input>' +
					'<button class="btn-close">Cancel</button>' +
				'</form>' +
			'</div>'
		);
		this.getAgeOptions();
		$(this.parentEl).append(this.el);
	},

	getAgeOptions: function() {
		var parent = $(this.el).find('label[for="age"]');

		console.log(parent);

		/*for(var i=1; i<=24; i++){
			var select = document.getElementById("hours");
			var option = document.createElement("OPTION");
			select.options.add(option);
			option.text = i;
			option.value = i;
		}*/
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
		var $err = $(this.el).find('.error');

		if (config.name === '') {
			this.notifyUser($err.filter('.name'), 'Please provide a name');
			return;
		} else if (config.age !== '' && isNaN(config.age)) {
			$err.filter('.name').empty();
			this.notifyUser($err.filter('.age'), "'Age' must be a number");
			return;
		}
		$err.empty();
		return true;
	},

	notifyUser: function(elem, message) {
		elem.text(message);
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