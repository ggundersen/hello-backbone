App.Algorithms.ShuffledList = function(collection) {
	var players = collection.models,
		len = players.length - 1,
		names = _.map(players, function(player) {
			return player.get('name');
		});

	var shuffleNames = function(names) {
		var i = 0,
			rand,
			temp;

		_.each(names, function(key, i) {
			var rand = Math.floor(Math.random() * i),
				temp = names[i];
			
			names[i] = names[rand];
			names[rand] = temp;
		});

		return names;
	};

	var pickPairs = function(names) {
		var i = 0,
			len = names.length - 1,
			result = {};

		for (; i < len; i++) {
			result[names[i]] = names[i + 1];
		}
		result[names[len]] = names[0];
		return result;
	};

	return pickPairs(shuffleNames(names));
};