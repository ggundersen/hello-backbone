App.View.Setup = Backbone.View.extend({

	el: 'overlay',

	events: {
		'click button#close': 'closeModal'
	},

	render: function() {
		console.log(this.el);
		$('body').append(
			'<div id="overlay">' +
				'<div>' +
					'<p>Add a user.</p>' +
					'<button id="close">Close</button>' +
				'</div>' +
			'</div>'
		);
		$('#overlay').show();
	},

	closeModal: function() {
		console.log('hey');
		$('#overlay').hide();
	}

});