App.View.AddPlayerWindow = BaseWindow.extend({

	className: 'window',

	events: {
		'click input.btn-submit' : 'submitPlayerInfo',
		'click button.btn-close' : 'cancelWindow'
	},

	initialize: function(options) {
		this.parentEl = options.parentEl;
		
		// Setting the HTML of `this.el`, div#add-player.
		$(this.el).html(
			'<div>' +
				'<h4>Add a user.</h4>' +
				'<form>' +
					'<label>Name</label>' +
					'<input class="name"></input>' +
					'<label>Age <span class="optional">(optional)</span></label>' +
					'<input class="age"></input>' +
					'<label>Sex <span class="optional">(optional)</span></label>' +
					'<input type="radio" name="sex" class="sex" value="female">Female</input>' +
					'<input type="radio" name="sex" class="sex" value="male">Male</input>' +
					'<input type="submit" class="btn-submit" value="Add"></input>' +
					'<button class="btn-close">Cancel</button>' +
				'</form>' +
			'</div>'
		);

		// Adding div#add-player to div#content, which was passed into
		// `initialize`.
		$(this.parentEl).append(this.el);
	},

	getPlayerInfo: function() {
		var sex = $('input:radio[name=sex]:checked').val();

		return {
			name: $('input.name').val(),
			age: $('input.age').val(),
			sex: sex === undefined ? 'female' : sex
		};
	},

	isValidPlayerInfo: function(obj) {
		if (obj.name === '') {
			alert('Please provide a name');
			return false;
		} else if (obj.age !== '' && isNaN(obj.age)) {
			alert("'Age' must be a number");
			return false;
		}
		return true;
	},

	submitPlayerInfo: function(evt) {
		evt.preventDefault();

		var data = this.getPlayerInfo(),
			giver,
			that = this;

		if ( this.isValidPlayerInfo(data) ) {
			giver = new App.Model.Giver(data);
			this.collection.add(giver);
			this.resetWindow();
		}
	}

});