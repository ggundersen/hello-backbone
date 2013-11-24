App.View.AddGiver = Backbone.View.extend({

	id: 'add-giver',

	events: {
		'click input.btn-submit' : 'handleForm',
		'click button.btn-close' : 'cancelView'
	},

	initialize: function(options) {
		this.parentEl = options.parentEl;
		
		// Setting the HTML of `this.el`, div#add-giver.
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

		// Adding div#add-giver to div#content, which was passed into
		// `initialize`.
		$(this.parentEl).append(this.el);
	},

	render: function() {
		$(this.el).show();
	},

	cancelView: function(evt) {
		evt.preventDefault();
		this.resetView();
	},

	getFormData: function() {
		var sex = $('input:radio[name=sex]:checked').val();

		return {
			name: $('input.name').val(),
			age: $('input.age').val(),
			sex: sex === undefined ? 'female' : sex
		};
	},

	handleForm: function(evt) {
		evt.preventDefault();

		var data = this.getFormData(),
			giver,
			that = this;

		if ( this.isValidData(data) ) {
			giver = new App.Model.Giver(data);
			this.collection.add(giver);
			this.resetView();
		}
	},

	isValidData: function(obj) {
		if (obj.name === '') {
			alert('Please provide a name');
			return false;
		} else if (obj.age !== '' && isNaN(obj.age)) {
			alert("'Age' must be a number");
			return false;
		}
		return true;
	}

	resetView: function() {
		$(this.el).hide();
		$(this.el).find('form')[0].reset();
	}

});