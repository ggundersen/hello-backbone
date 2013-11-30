App.Model.Shuffle = Backbone.Model.extend({

	initialize: function(options) {
		this.collection = options.collection;
	},

	assignReceivers: function(collection) {
		var players = collection.models,
			len = players.length;

		_.each(players, function(key, i) {
			players[i % len].set({ receiver: players[(i + 1) % len]});
		});

		collection.models = players;
		return collection;
	},

	run: function() {
		return this.assignReceivers(
			this.shufflePlayers( this.collection )
		);
	},

	shufflePlayers: function(collection) {
		var players = collection.models;

		_.each(players, function(key, i) {
			var rand = Math.floor(Math.random() * i),
				temp = players[i];

			players[i] = players[rand];
			players[rand] = temp;
		});

		collection.models = players;
		return collection;
	}

});