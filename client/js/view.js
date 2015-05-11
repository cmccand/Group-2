
//Model View

// var DrinkView = Backbone.View.extend({
//   tagName: 'body',
//   template: _.template($('#drinkTmpl').html()),
//   initialize: function() {
//     console.log('initialize working')
//     this.render();
//     $('.mood').append(this.el);

//   },
//   events: {
//     'click .moodbtn': 'submitDrink'
//   },
//   render: function() {
//     this.$el.html(this.template({data: 'something'}));
//     return this;
//   },
//   submitDrink: function(e) {
//     e.preventDefault();

//     var mood = $(e.target).attr('rel');

//     console.log(mood);
//     console.log(this.$el);
//     // this.model = new DrinkPost(mood);
//     // this.model.save();
//     App.router.navigate('mood?submitDrink='+ mood, true);
//   }
// });


//Collection View




var DrinkNameView = Backbone.View.extend({
  tagName: 'article',
  className : 'results',
  template: _.template($('#displayTmpl').text()),
  initialize: function() {
    console.log('DrinkNameViewWorking')
  },
  render: function() {
    var markup = this.template(this.model.attributes);
    this.$el.html(markup);
    return this;
  }
});


//////collection view////////////////////////////////////

var DrinkNamesView= Backbone.View.extend({
  tagName: 'results',
  initialize: function() {
    this.render();
    $('section').prepend(this.el);
  },

  render: function() {
    this.addAll();
    return this;
  },
  addOne: function(drinkModel) {

    var drinkNameView = new DrinkNameView({model: drinkModel});
    this.$el.append(drinkNameView.render().el);

  },
  addAll: function() {

    _.each(this.collection.models, this.addOne, this);

  }

});
