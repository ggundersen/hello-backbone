App.View.Setup = Backbone.View.extend({

	el: 'modalContainer',

	render: function() {
		$('body').append(
			'<div id="overlay">' +
				'<div>' +
					'<p>Content you want the user to see goes here.</p>' + 
				'</div>' +
			'</div>'
		);
		$('#overlay').show();
		$('#content').css('background', '#000');
	}

});