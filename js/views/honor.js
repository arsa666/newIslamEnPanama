var honor = Backbone.View.extend({
    render:function() {
    	self = this;
    	 $.get('js/templates/honorTemplate.html', function (data) {
            template = _.template($(data).html(), {});
            self.$el.html(template);
            $('#content').html(template);
        }, 'html');

        return this;
    }
});