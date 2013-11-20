App.View.InputGiver = Backbone.View.extend({

	id: 'overlay',

	tagName: 'div',

	events: {
		'click input.btn-submit' : 'submitForm',
		'click button#close'  : 'closeModal'
	},

	render: function() {
		$(this.el).html(
			'<div>' +
				'<p>Add a user.</p>' +
				'<form>' +
					'<input></input>' +
					'<input type="submit" class="btn-submit">Add giver</input>' +
				'</form>' +
				'<button id="close">x</button>' +
			'</div>');
		return this;
	},

	closeModal: function() {
		console.log('hey');
		$(this.el).hide();
	},

	submitForm: function(e) {
		e.preventDefault();
		console.log('submit');
	}

});