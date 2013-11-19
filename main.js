/* White Elephant
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

var App = {
	Model: {},
	Collection: {},
	View: {}
};

$(function() {



	var mainView = new App.View.Main();

});