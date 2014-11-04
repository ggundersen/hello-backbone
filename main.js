/* Pollyanna
 * 2013-11-18
 * Gregory Gundersen
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

/* What is main.js
 * ---------------
 * main.js is the primary JavaScript for this web application. It
 * defines the namespace, `App`, as well as nested objects that are
 * useful for organizing the application.
 */
var App = {
	Algorithm: {},
	Collection: {},
	Model: {},
	View: {}
};

/* Why wait for `document.ready`?
 * ------------------------------
 * We wait for the same reason we wait on any JavaScript application:
 * we need the DOM to load first. Backbone applications may look
 * a bit different than traditional websites, but the principles are
 * the same.
 *
 * Note that index.html, main.js is loaded before the other Backbone
 * files. In fact, the order is meaningless for us. No matter what,
 * when the code inside `$(function() { ... });` fires, all other 
 * JavaScript on the page should have loaded. But just FYI.
 */
$(function() {

	/* What does instantiating a Backbone View do?
	 * -------------------------------------------
	 * Instantiating a view executes the `initialize` method.
	 * Backbone calls both of these by default. Note that you call
	 * `extend` on the configuration object you pass into Backbone.
	 * You are mixing in your method definitions with Backbone's.
	 */
	new App.View.Main();

});
