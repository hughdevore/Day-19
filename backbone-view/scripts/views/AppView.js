var AppView = Backbone.View.extend({
	el: '#app-view',
	initialize: function() {

		_.bindAll(
			this,
			'onAddClick'
		);
	

		this.$textBox = $('#text-box');
		this.$clickButton = $('#click-button');

		this.$clickButton.on('click', this.onAddClick);

	},

	onAddClick: function() {

		var myTodo = new ListView({todo: this.$textBox.val()});

		this.$el.append(myTodo.el);

		

	}
});