/* hello backbone
 * 2013-11-08
 * Gregory Gundersen
 * http://arturadib.com/hello-backbonejs/
 * --------------------------------------------------------------- */

// What is Backbone.js?
// --------------------
// Backbone.js is lightweight framework for organizing JavaScript
// code into an MVC architecture (Model, View, Controller):
// 
// 1. A `Model` retrieves and populates data. The important point is
//    is that you do not have to store data in the DOM. You store it
//    in meaningfully organized and named objects.
// 2. A `View` is the HTML representation of the instantiated model.
//    Views update automatically as models change. This separates the
//    logic that communicates with the server from the DOM itself.
// 3. Controllers do not exist in Backbone. The documentation says:
//     
//      'References between Models and Views can be handled several
//      ways. Some people like to have direct pointers, where views
//      correspond 1:1 with models... Others prefer to have
//      intermediate "controller" objects that orchestrate the
//      creation and organization of views into a hierarchy. Others
//      still prefer the evented approach, and always fire events
//      instead of calling methods directly.'
//
// 4. A `Collection` is a grouping of models.


(function($){


/* Backbone Model
 * -------------- */

	var Item = Backbone.Model.extend({
		defaults: {
			part1: 'hello',
			part2: 'world'
		}
	});


/* Backbone Collection
 *
 *
 * ------------------- */

	var List = Backbone.Collection.extend({
		model: Item
	});


/* Backbone View
 * ------------- */

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
			_.bindAll(this, 'render', 'addItem');

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
			this.counter += 1;
			$('ul', this.el).append('<li>hello world' + this.counter + '</li>');
		}

	});

	// `listView` is an instantiation of `ListView`.
	var listView = new ListView();

})(jQuery);