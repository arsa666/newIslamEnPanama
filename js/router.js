window.App = {};

var MessageRouter = Backbone.Router.extend({
    initialize:function(){
        //App.views = new Array();
        this.menu();
        C('init function');
    },
    routes:{
        ""      : "mainContent",
        "main" : "mainContent",
        "pilares" : 'pilares',
        "mujer" : 'mujer',

    },
    //MENU inicio init () index
     menu: function () {
        App.menuView = new menuView({});
        App.menuView.render();
        C('index');

    },
    mainContent: function () {
        var view = new mainContent({});
        view.render();
        C('main content');

    },
    pilares: function () {
        var view = new pilares({});
        view.render();
        C('pilares');

    },
    mujer: function () {
        var view = new mujer({});
        view.render();
        C('mujer');

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
