var Drink = Backbone.Model.extend({
  urlRoot: 'https://secret-shelf-4422.herokuapp.com/',
  initialize: function() {
    console.log("drink has been initialized!");
  },
  toJSON: function() {
    return { drinks: this.attributes};
  }

});
