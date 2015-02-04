var ListView = Backbone.View.extend({
	tagName: 'span',

	initialize: function(options) {

		_.bindAll(
			this,
			'onListClick'
		);

		this.$checkBox = $('#check-box');
		var template = _.template($('#my-list').html());

		this.$el.html(template(options));


		this.$checkBox.change(this.onListClick);

	},

	onListClick: function() {

		if(this.$checkBox.attr("checked")) {
			this.$el.css('text-decoration','line-through');
		} else {
			this.$el.css('text-decoration','none');
		}
	}

});