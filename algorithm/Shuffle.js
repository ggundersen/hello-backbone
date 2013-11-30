App.Algorithm.Shuffle = function(players) {

	var getPlayersWithReceivers = function(players) {
		var len = players.length;

		_.each(players, function(key, i) {
			players[i % len].set({ receiver: players[(i + 1) % len].attributes.name });
		});

		return players;
	};

	var getShuffledPlayers = function(players) {
		_.each(players, function(key, i) {
			var rand = Math.floor(Math.random() * i),
			temp = players[i];

			players[i] = players[rand];
			players[rand] = temp;
		});

		return players;
	};

	return getPlayersWithReceivers( getShuffledPlayers( players ) );

};