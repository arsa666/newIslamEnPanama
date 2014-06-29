var menuView = Backbone.View.extend({
    initialize: function () {
        this.listenTo(this, 'afterRender', this.afterRender);

    },
    events: {
    	'click .nav-tabs a': 'selectItem',
    },
    className: 'menu-view',
    selectItem: function (e) {
        stop(e);
        var self = this;
        var target = $(e.target);
        self.$el.find('.nav-tabs a').click(function (e) {
            var scrollmem = $('body').scrollTop();
            Backbone.history.navigate('#/' + target.attr('href'), {trigger: true});


            $('html,body').scrollTop(scrollmem);
        });
    },
    render:function (eventName) {
    	self = this;
    	$.get('js/templates/menuTemplate.html', function (data) {
            template = _.template($(data).html(), {});//Option to pass any dynamic values to template
            self.$el.html(template).hide().fadeIn("slow");
            self.trigger('afterRender');
        }, 'html');
        return this;
    },
    afterRender: function(e){
        var self = this;
        var namaz = new namazDaily();
        namaz.fetch({
            success: function (model) {
                self.$el.find('#fazar').html(model.get('fazar'));
                self.$el.find('#zohar').html(model.get('zohar'));
                self.$el.find('#asar').html(model.get('asar'));
                self.$el.find('#magrib').html(model.get('magrib'));
                self.$el.find('#isha').html(model.get('isha'));

            },
            error: function (a,b) {
                console.error('Error fetching namazdaily times');
            }
        });
    },
});