App.View.InputGiver = Backbone.View.extend({

	id: 'overlay',

	tagName: 'div',

	events: {
		'click input.btn-submit' : 'handleForm',
		'click button.btn-close' : 'closeModal'
	},

	render: function() {
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
		return this;
	},

	closeModal: function() {
		$(this.el).hide();
	},

	getFormData: function() {
		var result = {
			name: $('input.name').val(),
			age:  $('input.age').val(),
			sex:  $('input.gender').val() // defaults to female
		};

		if (result.name === '') {
			alert('Please provide a name');
		} else if (result.age !== '' && isNaN(result.age)) {
			alert("'Age' must be a whole number");
		}

		return result;
	},

	handleForm: function(evt) {
		evt.preventDefault();

		var data = this.getFormData(),
			isValidData = this.validateData(data);

		if (!isValidData) {
			this.closeModal();
		} else {
			var giver = new App.Model.Giver(data);
			this.collection.add(giver);
			this.trigger('giverCreated', giver);
			this.closeModal();
		}

		return;
	},

	validateData: function(obj) {
		if (obj.name === '') {
			alert('Please provide a name');
			return;
		} else if (obj.age !== '' && isNaN(obj.age)) {
			alert("'Age' must be a number");
			return;
		}
		return true;
	},

	validData: function(obj) {

	}

});