App.View.InputGiver = Backbone.View.extend({

	id: 'overlay',

	events: {
		'click input.btn-submit' : 'handleForm',
		'click button.btn-close' : 'closeModal'
	},

	initialize: function(options) {
		this.parentEl = options.parentEl;
		this.render();
	},

	render: function() {
		// Setting the HTML of `this.el`, div#overlay.
		$(this.el).html(
			'<div>' +
				'<h4>Add a user.</h4>' +
				'<form>' +
					'<label>Name</label>' +
					'<input class="name"></input>' +
					'<label>Age <span class="optional">(optional)</span></label>' +
					'<input class="age"></input>' +
					'<label>Sex <span class="optional">(optional)</span></label>' +
					'<input type="radio" name="sex" class="gender" value="female">Female</input>' +
					'<input type="radio" name="sex" class="gender" value="male">Male</input>' +
					'<input type="submit" class="btn-submit" value="Add"></input>' +
					'<button class="btn-close">Cancel</button>' +
				'</form>' +
			'</div>'
		);

		// Adding div#overlay to div#content, which was passed into
		// `initialize`.
		$(this.parentEl).append( $(this.el).show() );
	},

	closeModal: function() {
		$(this.el).hide();
	},

	getFormData: function() {
		return result = {
			name: $('input.name').val(),
			age:  $('input.age').val(),
			sex:  $('input.gender').val() // defaults to female
		};
	},

	handleForm: function(evt) {
		evt.preventDefault();

		var giver,
			data = this.getFormData();

		if ( this.isValidData(data) ) {
			giver = new App.Model.Giver(data);
			this.collection.add(giver);//.addGiver();

			console.log(this.collection);

			this.trigger('giverCreated', giver);
			this.closeModal();
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

});