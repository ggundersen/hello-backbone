/* View
 *
 * 'Backbone Views are almost more convention than they are actual
 * code. A View is simply a JavaScript object that represents a
 * logical chunk of UI in the DOM. This might be a single item, an
 * entire list, a sidebar or panel, or even the surrounding frame
 * which wraps your whole app. Defining a chunk of UI as a View
 * allows you to define your DOM events declaratively, without having
 * to worry about render order... and makes it easy for the view to
 * react to specific changes in the state of your models.'
 * --------------------------------------------------------------- */

App.View.Main = Backbone.View.extend({

	// `el` is the DOM node that, upon instantion, is bound to
	// view instance. The important point is that we are
	// separating the logic of the application from the DOM.
	el: '#content',

	events: {
		'click button.btn-add': 'addGiver'
	},

	initialize: function() {
		this.collection = new App.Collection.Givers();

		// If we do not pass in `this`, then `this` will refer to 
		// the collection in the callback, `appendGiver`.
		this.collection.on('add', this.appendGiver, this);
		this.render();

		var that = this;

		// Instantiate this view but do not render it in its
		// `initialize` function.
		this.inputGiver = new App.View.InputGiver({
			collection: that.collection,
			parentEl: that.el
		});

	},

	render: function() {
		$(this.el).append(
			'<h3>White Elephant</h3>' +
			'<button class="btn-add">Add giver</button>' +
			'<table>' +
				'<thead>' +
					'<tr>' +
						'<td>Name</td><td>Age</td><td>Sex</td>' +
					'</tr>' +
				'</thead>' +

			'</table>'
		);
	},

	addGiver: function() {
		this.inputGiver.render();
	},

	appendGiver: function() {
		var lastModel = this.collection.at(this.collection.length - 1);

		$('table').append(
			'<tr>' +
				'<td>' + lastModel.attributes.name + '</td>' +
				'<td>' + lastModel.attributes.age + '</td>' +
				'<td>' + lastModel.attributes.sex + '</td>' +
			'</tr>'
		);

		// Maybe this is too expensive? But for now, it prevents an
		// unlimited number of InputGiver views from being created.
		//this.inputGiver.destroyView();
	}

});