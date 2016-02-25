// Page for the quiz view

// var QuizView = Backbone.View.extend {
//
//   // Need to append a class and a tag maybe?
//   tagName: 'div',
//   className: 'container',
//
//   var options = {
//     url: 'http://localhost:3000/api/questions',
//     method: 'get',
//     dataType: 'json',
//   },
//
//   render: function() {
//
//   }
//
// }

var Question = Backbone.Model.extend({
	urlRoot: 'http://localhost:3000/api/questions'
});


var Questions = Backbone.Collection.extend({
	model: Question,
	url: 'http://localhost:3000/api/questions'
});

  var options = {
    url: 'http://localhost:3000/api/questions',
    method: 'get',
    dataType: 'json'
  },


var Router = Backbone.Router.extend({

routes: {
		"index": "showIndex",
		"": "showQuestion"
},

showIndex: function(){
},

showQuestion: function(){
	question = new Question({id: 11});
	console.log(question);
	question.fetch().done(function(){
		console.log(question);
		$('#qid').html(question.get('content'));
		$('#answer1').html(question.get('a'));
		$('#answer2').html(question.get('b'));
		$('#answer3').html(question.get('c'));
		$('#answer4').html(question.get('d'));
	});
}

});

$(document).ready( function() {
  console.log('Initiating router...');
  var router = new Router();
  Backbone.history.start();
});
