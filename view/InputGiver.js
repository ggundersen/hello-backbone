App.View.InputGiver = Backbone.View.extend({

	id: 'overlay',

	tagName: 'div',

	events: {
		'click button#close': 'closeModal'
	},

	render: function() {
		this.el.innerHTML = '' +
			'<div>' +
				'<p>Add a user.</p>' +
				'<button id="close">Close</button>' +
			'</div>';
		return this;
	},

	closeModal: function() {
		console.log('hey');
		//$('#overlay').hide();
	}

});