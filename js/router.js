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
        "mujer/hiyab": "hiyab",
        "mujer/honor": "honor",
        "mujer/madre": "madre",
        "mujer/igualdad": "igualdad",
        "mujer/esposo": "esposo",
        "noTriste" : 'noTriste',
        "verdad": "verdad",
        "verdad": "verdad",
        "ciencia": "ciencia",
        "ramadan": "ramadan",
        "ramadan/ayunos": "ayunos",
        "ramadan/quienesAyunar": "quienesAyunar",
        "ramadan/duas": "ramadanDuas",
        "ramadan/taraweeh": "taraweeh",
        "bano": "bano",
        "quran": "quran",
        "salah": "salah",
        "qiblah": "qiblah",
        "duas": "duas",
        "hadith": "hadith",
        "islamRadio": "islamRadio",
        "videos": "videos",
        "audios":"audios",
        "mezquitas": "mezquitas",
        "salahPanama": "salahPanama",
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
    hiyab: function () {
        var view = new hiyab({});
        view.render();
        C('hiyab');

    },
    honor: function () {
        var view = new honor({});
        view.render();
        C('honor');

    },
    madre: function () {
        var view = new madre({});
        view.render();
        C('madre');

    },
    igualdad: function () {
        var view = new igualdad({});
        view.render();
        C('igualdad');

    },
    esposo: function () {
        var view = new esposo({});
        view.render();
        C('esposo');

    },
    noTriste: function () {
        var view = new noTriste({});
        view.render();
        C('noTriste');

    },
    verdad: function () {
        var view = new verdad();
        view.render();
        C('verdad');
    },
    ciencia: function () {
        var view = new ciencia();
        view.render();
        C('ciencia');
    },
    ramadan: function () {
        var view = new ramadan();
        view.render();
        C('ramadan');
    },
    ayunos: function () {
        var view = new ayunos();
        view.render();
        C('ayunos');
    },
    quienesAyunar: function () {
        var view = new quienesAyunar();
        view.render();
        C('quienesAyunar');
    },
    ramadanDuas: function () {
        var view = new ramadanDuas();
        view.render();
        C('ramadanDuas');
    },
    taraweeh: function () {
        var view = new taraweeh();
        view.render();
        C('taraweeh');
    },
    bano: function () {
        var view = new bano();
        view.render();
        C('bano');
    },
    quran: function () {
        var view = new quran();
        view.render();
        C('quran');
    },
    salah: function () {
        var view = new salah();
        view.render();
        C('salah');
    },
    qiblah: function () {
        var view = new qiblah();
        view.render();
        C('qiblah');
    },
    duas: function () {
        var view = new duas();
        view.render();
        C('duas');
    },
    hadith: function () {
        var view = new hadith();
        view.render();
        C('hadith');
    },
    islamRadio: function () {
        var view = new islamRadio();
        view.render();
        C('islamRadio');
    },
    videos: function () {
        var view = new videos();
        view.render();
        C('videos');
    },
    audios: function () {
        var view = new audios();
        view.render();
        C('audios');
    },
    mezquitas: function () {
        var view = new mezquitas();
        view.render();
        C('mezquitas');
    },
    salahPanama: function () {
        var namaz = new namazDaily();
        var view = new salahPanama({model: namaz});
        view.render();
        C('salahPanama');
    },

});

var router  = new MessageRouter();

$( document ).ready(function() {
        Backbone.history.start();
});

window.App.router = router;
