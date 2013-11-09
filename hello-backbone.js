/* hello backbone
 * 2013-11-08
 * Gregory Gundersen
 * http://arturadib.com/hello-backbonejs/
 * --------------------------------------------------------------- */


/* What is Backbone.js?
 * --------------------
 * Backbone.js is lightweight framework for organizing JavaScript
 * code into an MVC architecture (Model, View, Controller):
 * 
 * 1. A `Model` retrieves and populates data. The important point is
 *    is that you do not have to store data in the DOM. You store it
 *    in meaningfully organized and named objects.
 * 2. A `View` is the HTML representation of an instantiated model.
 *    Views update automatically when models change. This separates
 *    the client-server logic from the DOM.
 * 3. Controllers, in classic MVC architecture, connect the models
 *    and views. Controllers do not exist in Backbone. The
 *    documentation says:
 *     
 *      'References between Models and Views can be handled several
 *      ways. Some people like to have direct pointers, where views
 *      correspond 1:1 with models... Others prefer to have
 *      intermediate "controller" objects that orchestrate the
 *      creation and organization of views into a hierarchy. Others
 *      still prefer the evented approach, and always fire events
 *      instead of calling methods directly.'
 *
 * 4. A `Collection` is a set of models.
 */


(function($){


/* Models
 *
 * [A] 'Backbone Models [is] the basic data object in the framework--
 * frequently representing a row in a table in a database on your
 * server. A discrete chunk of data and a bunch of useful, related
 * methods for performing computations and transformations on that
 * data.
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

	// `ListView` is a backbone `View`, which is like a class in that
	// it is an object with inheritances. Backbone Views are then
	// instantiated.
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

			// `bindAll` fixes the loss of context of `this`. How
			// does it work?
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

			// This view is self-rendering. Obviously, it is not
			// necessary to call this function.
			this.render();
		},

		// `render` is interacts with the DOM view `el`.
		render: function() {
			$(this.el).append('<button id="add">Add list item</button>');
			$(this.el).append('<ul><li>hello world</li></ul>');
		},

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

			//
			this.collection.add(item);
		},

		appendItem: function(item){
			$('ul', this.el).append('<li>' + item.get('part1') + ' ' + item.get('part2') + '</li>');
		}

	});

	// `listView` is an instantiation of `ListView`.
	var listView = new ListView();

})(jQuery);