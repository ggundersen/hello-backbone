App.Algorithms.ShuffledList = function(collection) {

	var shufflePlayers = function(collection) {
		var players = collection.models;

		_.each(players, function(key, i) {
			var rand = Math.floor(Math.random() * i),
				temp = players[i];

			players[i] = players[rand];
			players[rand] = temp;
		});

		collection.models = players;
		return collection;
	};

	var assignReceivers = function(collection) {
		var players = collection.models,
			len = players.length;

		_.each(players, function(key, i) {
			players[i % len].set({ receiver: players[(i + 1) % len]});
		});

		collection.models = players;
		return collection;
	};

	return assignReceivers( shufflePlayers(collection) );
};