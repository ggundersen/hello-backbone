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
	el: 'body',

	events: {
		//'click button#add': 'addItem'
	},

	// `initialize` is called upon instantiation of the View.
	initialize: function() {

		this.collection = new App.Collection.Givers();

		// `bind` binds an `add` method to `this.appendItem`.
		// Now we can say `this.collection.add()` and it will
		// call `this.appendItem`.
		// => this.collection.bind('add', this.appendItem);
		
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
			'<button id="add">+</button>' +
			'<input id="input"></input>' +
			'<table></table>'
		);

		// Pass in every item in the collection (every model)
		// into `appendItem`. But why do we do this? Just in case
		// the collection is not empty. It is, for this tutorial,
		// meaningless.
		//_(this.collection.models).each(function(item) {
		//	self.appendItem(item);
		//}, this);
	},

	// `addItem` is bound to the click event of the #add button.
	// It increments the counter and instantiates a new `Item`
	// (which is just a model) `item` and calls `set`, passing in
	// a default object with more data. Remember, this is just
	// modifying the model. It has nothing to do with the DOM.
	/*addItem: function() {
		var item,
			input = $('#input').val();

		if ( !input ) {
			alert('Please add something to do');
		} else {
			this.counter++;

			// Every time `addItem` is called, a new `Item` model is
			// instantiated.
			item = new Item();

			// `set` must be a built-in method for models. This 
			// passes in an object which overrides the model's
			// `defaults` object.
			item.set({
				text: input
			});

			// Adding to the collection by calling `add` is really,
			// in this case, calling `appendItem` with the
			// appropriate model data.
			this.collection.add(item);

			// Clear input
			$('#input').val('');
		}
	},

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