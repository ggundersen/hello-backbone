/* hello backbone
 * 2013-11-08
 * Gregory Gundersen
 * http://arturadib.com/hello-backbonejs/
 * --------------------------------------------------------------- */


/* What is Backbone.js?
 * --------------------
 * Backbone.js is lightweight framework for organizing JavaScript
 * code into an MVC-ish architecture (Model, View, Controller):
 *
 * 1.  A `Model` retrieves and populates data. The important point is
 *     is that you do not have to store data in the DOM. You store it
 *     in meaningfully organized and named objects.
 * 2a. A `View` is the HTML representation of an instantiated model.
 *     Views update automatically when models change. This separates
 *     the client-server logic from the DOM.
 * 2b. A `Collection` is a set of models. 'Basically an array of
 *     Model objects with some helper functions.' The 'C' in 'MVC'
 *     refers to 'controller', not 'collection'.
 * 3.  Controllers, in classic MVC architecture, connect the models
 *     and views. Controllers do not exist in Backbone.   
 */


(function($){


	// I have no idea what this does.
	Backbone.sync = function(method, model, success, error){
		success();
	};


/* Models
 *
 * [A] 'Backbone Models [is] the basic data object in the framework--
 * frequently representing a row in a table in a database on your
 * server. A discrete chunk of data and a bunch of useful, related
 * methods for performing computations and transformations on that
 * data.
 *
 * 'A model is basically a Javascript object, i.e. key-value pairs,
 * with some helper functions to handle event triggering,
 * persistence, etc.'
 * --------------------------------------------------------------- */

	var Item = Backbone.Model.extend({
		defaults: {
			part1: 'hello',
			part2: 'world'
		}
	});


/* Collections
 *
 * 'If models tend to represent a single row of data, a Backbone
 * Collection is more analagous to a table full of data... or a small
 * slice or page of that table, or a collection of rows that belong
 * together for a particular reason -- all of the messages in this
 * particular folder, all of the documents belonging to this
 * particular author, and so on. Collections maintain indexes of
 * their models, both in order, and for lookup by id.'
 * --------------------------------------------------------------- */

	var List = Backbone.Collection.extend({
		model: Item
	});


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

	// `ItemView` is responsible for rendering each item. Compare
	// this to `ListView`. Views are like a classes in that they are
	// instantiated objects with inheritances.
	var ItemView = Backbone.View.extend({
		tagName: 'li', // name of (orphan) root tag in this.el
	
		events: {
			'click span.swap':  'swap',
			'click span.delete': 'remove'
		},

		initialize: function(){
			// every function that uses `this` as the current object
			// should be in here
			_.bindAll(this, 'render', 'unrender', 'swap', 'remove');

 			// `bind` binds strings to methods. It is different than
 			// `bindAll`, which is concerned with the dynamic binding
 			// of `this`. I suppose another question might be: why
 			// does Backbone force you to bind your methods, rather
 			// than add them directly to the object? Something must
 			// be happening under the hood.
			this.model.bind('change', this.render);
			this.model.bind('remove', this.unrender);
		},

		render: function(){
			$(this.el).html(
				'<span style="color:black;">' + this.model.get('part1') + ' ' + this.model.get('part2') + '</span>' +
				'<span class="swap" style="font-family:sans-serif; color:blue; cursor:pointer;">' + '[swap]</span>' +
				'<span class="delete" style="cursor:pointer; color:red; font-family:sans-serif;">' + '[delete]</span>'
			);
			// For chaining.
			return this;
		},

		unrender: function(){
			$(this.el).remove();
		},

		// `swap` is a convenience function that flips `part1` with
		// `part1`.
		swap: function(){
			var swapped = {
				part1: this.model.get('part2'),
				part2: this.model.get('part1')
			};
			this.model.set(swapped);
		},

		// Oy vey.
		remove: function(){
			this.model.destroy();
		}
	});

	// `ListView` is the view of the list. Think about how this is
	// fundamentally separated from `ItemView`. We can dramatically
	// change how we model items without effecting `Listview`.
	var ListView = Backbone.View.extend({

		// `el` is the DOM node that, upon instantion, is bound to
		// View instance. The important point is that we are
		// separating the logic of the application from the DOM.
		el: $('body'),

		events: {
			'click button#add': 'addItem'
		},

		// `initialize` is called upon instantiation of the View.
		initialize: function() {

			_.bindAll(this, 'render', 'addItem', 'appendItem');

			// `new List()` instantiates a new Backbone Collection,
			// with its model property set to `Item`. Note that
			// `this.collection` refers to this view's particular
			// collection. Can they have more than one?
			this.collection = new List();

			// `bind` binds an `add` method to `this.appendItem`.
			// Now we can say `this.collection.add()` and it will
			// call `this.appendItem`.
			this.collection.bind('add', this.appendItem);

			// Since `initialize` is called immediately, this cannot 
			// be accessed excess through `addItem`.
			this.counter = 0;

			// See `render`.			
			this.render();
		},

		// `render` builds a simple list with an 'add' button. It
		// iterates over every item (model) in the view's collection
		// and applies that item as an argument to `appendItem`.
		// Basically, it builds a DOM-level unordered list from data
		// stored in models.
		render: function() {
			// Store a reference to `this` since it needs to be
			// referenced in `each`.
			var self = this;

			// `render` is interacts with the DOM view `el`.
			$(this.el).append('<button id="add">Add list item</button>');
			$(this.el).append('<ul></ul>');

			// Pass in every item in the collection (every model)
			// into `appendItem`. But why do we do this? Just in case
			// the collection is not empty. It is, for this tutorial,
			// meaningless.
			_(this.collection.models).each(function(item) {
				self.appendItem(item);
			}, this);
		},

		// `addItem` is bound to the click event of the #add button.
		// It increments the counter and instantiates a new `Item`
		// (which is just a model) `item` and calls `set`, passing in
		// a default object with more data. Remember, this is just
		// modifying the model. It has nothing to do with the DOM.
		addItem: function() {
			this.counter++;

			// Every time `addItem` is called, a new `Item` model is
			// instantiated.
			var item = new Item();

			// `set` must be a built-in method for models. This 
			// passes in an object which overrides the model's
			// `defaults` object.
			item.set({
				part2: item.get('part2') + this.counter
			});

			// Adding to the collection by calling `add` is really,
			// in this case, calling `appendItem` with the
			// appropriate model data.
			this.collection.add(item);
		},

		appendItem: function(item){
			var itemView = new ItemView({
				model: item
			});

			// We can call `...render().el` because `itemView`'s
			// `render` method returns `this`. Thus, `this.el` refers
			// to the specific DOM element, the <li> tag in
			// `ItemView`.
			$('ul', this.el).append(itemView.render().el);
		}

	});

	// `listView` is an instantiation of `ListView`. If this was not
	// instantiated, then the list would simply not appear. Think of
	// 
	var listView = new ListView();

// Add jQuery to the IIFE.
})(jQuery);