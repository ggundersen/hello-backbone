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

App.Model.Giver = Backbone.Model.extend({

	defaults: {
		age: null,
		giver: null,
		name: null,
		receiver: null,
		sex: null
	}

});
