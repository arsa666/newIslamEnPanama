var esposo = Backbone.View.extend({
	events:{
	'click .template': 'templateFunc'
	},
	templateFunc: function(){
	},
    render:function() {
    	self = this;
    	 $.get('js/templates/esposoTemplate.html', function (data) {
            template = _.template($(data).html(), {});
            self.$el.html(template);
            $('#content').html(template);
        }, 'html');

        return this;
    }
});