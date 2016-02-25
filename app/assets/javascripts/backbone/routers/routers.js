console.log("hello gromit");

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

    var quiz = new Questions();

    quiz.fetch().done(function() {
      console.log(quiz);
      debugger
      // does it need the collection in here?
      // var quizView = new QuizView({ model: quiz})
      // add back to the page
      // $('main').html( quizView.render().el );
    });
  },

  showEnd: function() {
    // grabs the end page template and renders it
  }

});

$(document).ready( function() {
  console.log("call for router");
  var router = new Router();
  Backbone.history.start();
});


