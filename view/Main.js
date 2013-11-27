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

	// `el` is the DOM node that, upon instantion, is bound to the
	// view instance. The important point is that we are
	// separating the logic of the application from the DOM.
	el: '#content',

	events: {
		'click button.btn-add-player': 'showAddPlayerWindow',
		'click button.btn-shuffle': 'showShuffleView'
	},

	initialize: function() {
		var that = this;
		this.collection = new App.Collection.Players();
		this.render();

		this.playersList = new App.View.PlayersList({
			collection: that.collection,
			parentEl: that.el
		});

		// Instantiate these views but do not render them yet.
		this.addPlayerWindow = new App.View.AddPlayerWindow({
			collection: that.collection,
			parentEl: that.el
		});

		this.shuffleView = new App.View.ShuffleWindow({
			collection: that.collection,
			parentEl: that.el
		});

		/*this.shuffledList = new App.View.ShuffledList({
			collection: that.collection,
			parentEl: that.el
		});*/
	},

	render: function() {
		$(this.el).append(
			'<h3>White Elephant</h3>' +
			'<button class="btn-add-player">Add player</button>' +
			'<button class="btn-shuffle">Shuffle</button>'
		);
	},

	showAddPlayerWindow: function() {
		this.addPlayerWindow.render();
	},

	showShuffleView: function() {
		this.shuffleView.render();
	}

	/*showShuffledList: function() {
		this.shuffledList.render(
			App.Algorithms.ShuffledList(this.collection)
		);
	}*/

});