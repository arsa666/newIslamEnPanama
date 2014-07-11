var islamRadio = Backbone.View.extend({
	events:{
	'click .template': 'templateFunc'
	},
	checkServerStatus: function(){
        var self = this;
        var iframeTemplate = '<iframe src="http://107.170.87.104:8000/stream"></iframe>';
        var server = new serverStatus();
        server.fetch({
            success: function (m,response) {
                if (response === 1) {
                    $('#radio-frame').html(iframeTemplate);
                } else {
                     $('#radio-frame').html("<h1>Radio esta Offline, intente mas tarde a la hora del azaan o a la hora de Isha 8:30 p.m. o el viernes a las 12:30 p.m.</h1>");
                }
            }
        });
	},
    render:function() {
    	self = this;
    	 $.get('js/templates/islamRadioTemplate.html', function (data) {
            template = _.template($(data).html(), {});
            self.$el.html(template);
            $('#content').html(template);
            self.checkServerStatus();
        }, 'html');

        return this;
    }
});