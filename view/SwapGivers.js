App.View.SwapGivers = Backbone.View.extend({

	id: 'assignments',

	events: {
	},

	initialize: function(options) {
		this.parentEl = options.parentEl;
		
		// Setting the HTML of `this.el`, div#overlay.
		//$(this.el).html();

		// Adding div#overlay to div#content, which was passed into
		// `initialize`.
		//$(this.parentEl).append(this.el);
	},

	render: function() {
		$(this.el).show();
	},

	cancelView: function(evt) {
		evt.preventDefault();
		this.resetView();
	},

	getFormData: function() {
		var sex = $('input:radio[name=sex]:checked').val();

		return {
			name: $('input.name').val(),
			age: $('input.age').val(),
			sex: sex === undefined ? 'female' : sex
		};
	},

	handleForm: function(evt) {
		evt.preventDefault();

		var data = this.getFormData(),
			giver,
			that = this;

		if ( this.isValidData(data) ) {
			giver = new App.Model.Giver(data);
			this.collection.add(giver);
			this.resetView();
		}
	},

	resetView: function() {
		$(this.el).hide();
		$(this.el).find('form')[0].reset();
	},

	isValidData: function(obj) {
		if (obj.name === '') {
			alert('Please provide a name');
			return false;
		} else if (obj.age !== '' && isNaN(obj.age)) {
			alert("'Age' must be a number");
			return false;
		}
		return true;
	}

});