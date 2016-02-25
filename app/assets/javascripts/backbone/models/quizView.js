// Page for the quiz view

var QuizView = Backbone.View.extend {

  // Need to append a class and a tag maybe?
  tagName: 'div',
  className: 'container',

  var options = {
    url: 'http://localhost:3000/api/questions',
    method: 'get',
    dataType: 'json'
  },

  render: function() {
    
  }

}