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
    // clear any previously listed titles
    $('#titles').empty();

    currSearchTitle = $('#titleSearch').val();

    // if a char has been entered, and not a search string exists, perform search
    //   (this prevents backspacing to an empty string from listing all titles)
    if (currSearchTitle.length > 0) {    
      // get a list of titles for currently entered search title (each key)
      var foundTitles = App.autocompleter.complete(currSearchTitle);

      // list all the titles
      foundTitles.forEach(function (title, index, array) {
        $('#titles').append('<li>'+ title +'</li>');
      });    
    } 
  }
});