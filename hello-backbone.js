/* hello backbone
 * 2013-11-08
 * Gregory Gundersen
 * http://arturadib.com/hello-backbonejs/
 * --------------------------------------------------------------- */

(function($){

	// `ListView` is a backbone `View`, which is like a class in that
	// it is an object with inheritances. Backbone Views are then
	// instantiated.
	var ListView = Backbone.View.extend({

		// `el` is the DOM node that, upon instantion, is bound to
		// View instance. The important point is that we are
		// separating the logic of the application from the DOM.
		el: $('body'),
	
		// `initialize` is called upon instantiation of the View.
		initialize: function(){

			// `bindAll` fixes the loss of context of `this`. How
			// does it work?
			_.bindAll(this, 'render');

			// This view is self-rendering. Obviously, it is not
			// necessary to call this function.
			this.render();
		},

		// `render` is interacts with the DOM view `el`.
		render: function(){
			$(this.el).append("<ul> <li>hello world</li> </ul>");
		}

	});

	// `listView` is an instantiation of `ListView`.
	var listView = new ListView();

})(jQuery);