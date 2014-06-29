window.App = {};

var MessageRouter = Backbone.Router.extend({
    initialize:function(){
        //App.views = new Array();
        this.indexDisplay();
        C('init function');
    },
    routes:{
        ""      : "indexDisplay",
        "test" : "test",
    },
    //MENU inicio init () index
     indexDisplay: function () {
        App.menuView = new menuView({});
        $('#main').html(App.menuView.render().el);
        C('index');

    },
    test: function () {
        C('test');
    }

});

var router  = new MessageRouter();

$( document ).ready(function() {
        Backbone.history.start();
});

window.App.router = router;
