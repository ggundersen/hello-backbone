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

	// Actual DOM elements that this events hash references are built
	// in `App.View.Menu`. This does not seem ideal.
	events: {
		'click button.add-player': 'showAddPlayerWindow',
		'click button.shuffle': 'showShuffleWindow'
	},

	initialize: function() {
		var that = this;

		this.collection = new App.Collection.Players();
		this.render();

		_.bindAll(this, 'showShuffleList');

		// Instantiate these views but do not render them yet.
		this.addPlayerWindow = new App.View.AddPlayerWindow({
			collection: that.collection,
			parentEl: that.el
		});
		this.shuffleWindow = new App.View.ShuffleWindow({
			collection: that.collection,
			parentEl: that.el
		});
		this.playersList = new App.View.PlayersList({
			collection: that.collection,
			parentEl: that.el
		});
		this.shuffledList = new App.View.ShuffledList({
			collection: that.collection,
			parentEl: that.el
		});

		this.listenTo(this.shuffleWindow, 'shuffle', this.showShuffleList);
	},

	removeMenu: function() {
		$(this.el).find('.menu').remove();
	},

	render: function() {
		$(this.parentEl).append(this.el);
		$(this.el).append(
			'<h3>White Elephant</h3>' +
			'<div class="menu">' +
				'<button class="add-player">Add player</button>' +
				'<button class="shuffle">Shuffle players</button>' +
			'</div>'
		);
	},

	showAddPlayerWindow: function() {
		this.addPlayerWindow.render();
	},

	showShuffleList: function(shuffledPlayers) {
		var that = this;

		this.playersList.unrender();
		this.removeMenu();
		this.shuffledList.render();

		if (shuffledPlayers.length === 1) {
			this.shuffledList.appendPlayers( shuffledPlayers );
		} else {
			_.each(shuffledPlayers, function(players) {
				that.shuffledList.appendPlayers( players );
			});
		}
		
	},

	showShuffleWindow: function() {
		this.shuffleWindow.render();
	}

});