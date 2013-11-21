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

App.Collection.Givers = Backbone.Collection.extend({

	model: App.Model.Giver,

	this.addGiver: function() {
		this.trigger('addGiver');
	}

});