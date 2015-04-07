var DrinkCollection = Backbone.Collection.extend({

    url: 'https://secret-shelf-4422.herokuapp.com/',
    initialize: function(){
        console.log('collection works..or not');
    }

});
