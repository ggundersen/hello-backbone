App.View.ShuffleWindow = BaseWindow.extend({

	className: 'window',

	events: {
		'click button.btn-close' : 'cancelWindow',
		'click input.btn-byAge': 'enforceSingleSelection',
		'click input.btn-byGender': 'enforceSingleSelection',
		'click input.btn-submit' : 'runAlgorithm'
	},

	initialize: function(options) {
		this.parentEl = options.parentEl;
		$(this.el).html(
			'<div>' +
				'<h4>Shuffle settings.</h4>' +
				'<form>' +
					'<label>Shuffle by age <span class="optional">(optional)</span></label>' +
					'<input type="checkbox" name="byAge" class="btn-byAge" value="adults">Adults</input>' +
					'<input type="checkbox" name="byAge" class="btn-byAge" value="kids">Kids</input>' +
					'<label>Shuffle by sex <span class="optional">(optional)</span></label>' +
					'<input type="checkbox" name="byGender" class="btn-byGender" value="men">Men</input>' +
					'<input type="checkbox" name="byGender" class="btn-byGender" value="women">Women</input>' +
					'<input type="submit" class="btn-submit" value="Shuffle"></input>' +
					'<button class="btn-close">Cancel</button>' +
				'</form>' +
			'</div>'
		);
		$(this.parentEl).append(this.el);
	},

	getAlgorithmInfo: function() {
		var data = {
			byAge: $('.btn-byAge:checked'),
			byGender: $('.btn-byGender:checked')
		};

		if ( !this.isValidAlgorithmInfo(data) ) return;
		return {
			byAge: data.byAge.val(),
			byGender: data.byGender.val()
		};
	},

	isValidAlgorithmInfo: function(data) {
		if (data.byAge.length === 2) {
			alert('Please select just one age group');
			return;
		} else if ( data.byGender.length === 2 ) {
			alert('Please select just one gender');
			return;
		}
		return true;
	},

	runAlgorithm: function(evt) {
		evt.preventDefault();

		var data = this.getAlgorithmInfo()
			that = this;

		if (data) {
			var test = new App.Model.Shuffle({
				collection: that.collection,
				byAge: data.byAge,
				byGender: data.byGender
			});
			this.resetWindow();
		}
	}

});