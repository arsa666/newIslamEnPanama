var menuView = Backbone.View.extend({
    initialize: function () {
        this.listenTo(this, 'afterRender', this.afterRender);
    },
    className: 'menu-view',
    render:function (eventName) {
    	var self = this;
    	$.get('js/templates/menuTemplate.html', function (data) {
            template = _.template($(data).html(), {});//Option to pass any dynamic values to template
            self.template = template;
            self.$el.html(template);
            $('#menu').html(template);
            self.trigger('afterRender');

        }, 'html');
        return this;
    },
    _costumEvents: function () {
        var self = this;
        $('#menu').find('.dropdown-toggle').click(function () {
            // self._changeBG();
        });
    },
    afterRender: function () {
        var menuItem = Backbone.history.fragment;
        var menu = $('#menu');
        menu.find('a[href="'+ menuItem +'"]').parent().parent().parent().addClass('active');
        menu.find('a[href="'+ menuItem +'"]').parent().addClass('active');
        this._costumEvents();
    }
});