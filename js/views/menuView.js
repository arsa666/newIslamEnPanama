var menuView = Backbone.View.extend({
    initialize: function () {
        this.listenTo(this, 'afterRender', this.afterRender);
    },
    className: 'menu-view',
    submenu: function (e) {
        stop(e);
        var submenu2 = $(e.currentTarget).find('.submenu2');
        if (submenu2.css('display') === 'none') {
            submenu2.css('display', 'block');
        } else if (submenu2.css('display') === 'block'){
            submenu2.css('display', 'none');
        }
    },
    customEvents: function () {
        var self = this;

        $(document).click(function (e) {
           self.selectMenu(e);
        });

    },
    selectMenu: function (e) {
        var target = $(e.target);
        if (target.hasClass('dropdown-toggle')) {//open the first menu
            $('#menu').find('.dropdown').removeClass('open');
            target.parent().addClass('open');
        } else if (target.hasClass('menu-link')) {//open the menu-link
            $('#menu').find('.dropdown').removeClass('active');
            $('#menu').find('.menu-link').parent().removeClass('active');
            $('#menu').find('.dropdown-toggle').parent().removeClass('open');
            $('#menu').find('.submenu2').css('display', 'none');//close sublevel2
            this.selectLink(target.attr('href'));
        } else if (target.parent().hasClass('submenu1')) {//open the submenu1
            this.submenu(e);
        } else {//close everything
            $('#menu').find('.dropdown').removeClass('open');
            $('#menu').find('.submenu2').css('display', 'none');
        }
    },
    render:function (eventName) {
    	var self = this;
    	$.get('js/templates/menuTemplate.html', function (data) {
            template = _.template($(data).html(), {});//Option to pass any dynamic values to template
            self.template = template;
            self.$el.html(template);
            $('#menu').html(template);
            self.trigger('afterRender');
            self.customEvents();
        }, 'html');
        return this;
    },
    selectLink: function (menuItem) {
        var menu = $('#menu');
        menu.find('a[href="'+ menuItem +'"]').parent().parent().parent().addClass('active');
        menu.find('a[href="'+ menuItem +'"]').parent().addClass('active');
    },
    afterRender: function () {
        var menuItem = Backbone.history.fragment;
        if (menuItem === '') {
            menuItem = '#/main';
        } else {
            menuItem = '#/' + menuItem;
        }
        this.selectLink(menuItem);
    }
});