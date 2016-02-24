var Router = Backbone.Router.extend({
  routes: {
    "": "showIndex",
    "quiz": "showQuiz"
    "quiz/end": "showEnd"
  },

  showIndex: function() {
    // write function here that renders the index template
  },

  showQuiz: function() {
    // write function here that renders the quiz template
    // grabs the data from the api
    // sends back the results and saves them
  },

  showEnd: function() {
    // grabs the end page template and renders it
  }

});