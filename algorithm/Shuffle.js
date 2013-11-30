App.Algorithm.Shuffle = function(players) {

	var assignReceivers = function(players) {
		//console.log(players);

		var len = players.length;

		_.each(players, function(key, i) {
			//console.log(players);
			//players[i % len].set({ receiver: players[(i + 1) % len]});
		});

		return players;
	};

	var shufflePlayers = function(players) {
		return _.map(players, function(i) {
			var rand = Math.floor(Math.random() * i),
				temp = players[i];

			players[i] = players[rand];
			players[rand] = temp;
		});
	};

	return assignReceivers( shufflePlayers( players ) );

};