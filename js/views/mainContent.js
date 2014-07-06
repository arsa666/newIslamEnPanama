var mainContent = Backbone.View.extend({
    initialize: function () {
        this.listenTo(this, 'afterRender', this.afterRender);

    },
	events:{
	'click .template': 'templateFunc'
	},
	templateFunc: function(){
	},
    render:function() {
    	self = this;
    	 $.get('js/templates/mainContentTemplate.html', function (data) {
            template = _.template($(data).html(), {});
            self.$el.html(template);
            $('#content').html(template);
            self.trigger('afterRender');

        }, 'html');

        return this;
    },
    afterRender: function(e){
        var self = this;
        var namaz = new namazDaily();
        namaz.fetch({
            success: function (model) {
                $('#content').find('#fazar').html(model.get('fazar'));
                $('#zohar').html(model.get('zohar'));
                $('#asar').html(model.get('asar'));
                $('#magrib').html(model.get('magrib'));
                $('#isha').html(model.get('isha'));

            },
            error: function (a,b) {
                console.error('Error fetching namazdaily times');
            }
        });
    },
});