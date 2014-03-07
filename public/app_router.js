App.Routers.Main = Backbone.Router.extend({
  routes: {
    "": "main",
    "*other": "defaultRoute"
  },

  main: function () {
    var view = new App.Views.Main();
    $('body').html(view.render().el);
  },

  defaultRoute: function() {
    console.log('unplanned route, sending to default.');
  }
});