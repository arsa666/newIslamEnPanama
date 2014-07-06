var menuView = Backbone.View.extend({
    initialize: function () {

    },
    className: 'menu-view',
    render:function (eventName) {
    	self = this;
    	$.get('js/templates/menuTemplate.html', function (data) {
            template = _.template($(data).html(), {});//Option to pass any dynamic values to template
            self.$el.html(template);
            $('#menu').html(template);
        }, 'html');
        return this;
    },
});