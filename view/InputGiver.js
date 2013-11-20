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
					'<label>Gender <span class="optional">(optional)</span></label>' +
					'<input class="gender"></input>' +
					'<input type="submit" class="btn-submit" value="Add"></input>' +
					'<button class="btn-close">Cancel</button>' +
				'</form>' +
			'</div>');
		return this;
	},

	closeModal: function() {
		$(this.el).hide();
	},

	getFormData: function() {
		return {
			name: $('input.name').val(),
			age: $('input.age').val(),
			gender: $('input.gender').val()
		};
	},

	handleForm: function(e) {
		e.preventDefault();

		var data = this.getFormData();

		if (true /*valid*/) {
			// closeModal();
			// submitForm();
		} else {

		}
	},

	submitForm: function() {

	},

	validData: function(obj) {

	}

});