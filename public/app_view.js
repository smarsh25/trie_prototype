App.Views.Main = Backbone.View.extend({
  id: 'autoComplete',

  events: {
    'keyup #titleSearch': 'updateSearch'
  },

  render: function () {
    this.$el.html('<input id="titleSearch" type="text">');
    this.$el.append('<ul id="titles"></ul>');
    return this;
  },

  updateSearch: function(event) {
    var currTitle = $('#titleSearch').val();

    $('#titles').append('<li>'+currTitle+'</li>');    
  }
});