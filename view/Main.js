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
	// View instance. The important point is that we are
	// separating the logic of the application from the DOM.
	el: '#content',

	events: {
		'click button#add': 'addGiver'
	},

	// `initialize` is called upon instantiation of the View.
	initialize: function() {
		this.collection = new App.Collection.Givers();
		this.collection.bind('add', this.appendGiver);		
		this.render();
	},

	// `render` builds a simple list with an 'add' button. It
	// iterates over every item (model) in the view's collection
	// and applies that item as an argument to `appendItem`.
	// Basically, it builds a DOM-level unordered list from data
	// stored in models.
	render: function() {
		var that = this;

		$(this.el).append(
			'<h3>White Elephant</h3>' +
			'<button id="add">Add giver</button>' +
			'<input id="input"></input>' +
			'<table></table>'
		);
	},

	addGiver: function() {

		var setup = new App.View.Setup();
		setup.render();
		/*var item,
			input = $('#input').val();

		if ( this.validInput ) {
			giver = new App.Model.Giver();
			giver.set({
				name: input
			});
			this.collection.add(giver);
			$('#input').val('');
		}

		this.renderGiver();*/
	},

	appendGiver: function(giver) {
		var giverView = new App.View.Giver({
			model: giver
		});

		$('table', this.el).append(giverView.render().el);
	},

	validInput: function(str) {
	}

	/*

	appendItem: function(item){
		var itemView = new ItemView({
			model: item
		});

		// We can call `...render().el` because `itemView`'s
		// `render` method returns `this`. Thus, `this.el` refers
		// to the specific DOM element, the <tr> tag in
		// `ItemView`.
		$('table', this.el).append(itemView.render().el);
	}*/

});