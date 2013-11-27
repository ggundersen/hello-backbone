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
		var data = {
			name: $('input.name').val() || '',
			age: $('input.age').val() || '',
			gender: $('input:radio[name=gender]:checked').val() || ''
		};

		if ( !this.isValidPlayerInfo(data) ) return;
		return data;
	},

	isValidPlayerInfo: function(data) {
		if (data.name === '') {
			alert('Please provide a name');
			return;
		} else if (data.age !== '' && isNaN(data.age)) {
			alert("'Age' must be a number");
			return;
		}
		return true;
	},

	submitPlayerInfo: function(evt) {
		evt.preventDefault();

		var data = this.getPlayerInfo(),
			giver,
			that = this;

		if (data) {
			giver = new App.Model.Giver(data);
			this.collection.add(giver);
			this.resetWindow();
		}
	}

});