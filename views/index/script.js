//================= MODELS =================//
var Question = Backbone.Model.extend({
	urlRoot: 'http://localhost:3000/api/questions'
});


//=============== COLLECTIONS ==============//
var Questions = Backbone.Collection.extend({
	model: Question,
	url: 'http://localhost:3000/api/questions'
});


//================== VIEWS =================//

//=== MAIN MENU VIEW ===//
var MainMenuView = Backbone.View.extend({
  tagName: 'div',
  className: 'container',
  template: $('#mainMenuTemplate').html(),
  render: function() {
    var html = Mustache.render(this.template);
		this.$el.html(html);
		return this;
  }
});


//=========== ROUTER DECLARATION ===========//

var Router = Backbone.Router.extend({

	//=== ROUTES ===//
	routes: {
			"": "showIndex",
			"#quiz/:id": "showQuiz",
			"#quiz/:id/question/:id": "showQuestion",
			"#quiz/:id/results": "showResults",
			"#totals": "showTotals"
	},

	//=== INDEX/HOME PAGE ===//quiz main menu
	showIndex: function(){
		var mainMenu = new MainMenuView();
		$('body').append(mainMenu.render().el);
	},

	//=== QUIZ START PAGE ===//for each quiz
	showQuiz: function(){
		console.log('HELLO');
	},

	//=== QUESTION PAGE ===//for each question
	showQuestion: function(){
		question = new Question({id: 21});
		console.log(question);
		question.fetch().done(function(){
			console.log(question);
			$('#qid').html(question.get('content'));
			$('#answer1').html(question.get('a'));
			$('#answer2').html(question.get('b'));
			$('#answer3').html(question.get('c'));
			$('#answer4').html(question.get('d'));
		});
	},

	//=== RESULTS PAGE ===//after each quiz
	showResults: function(){

	},

	//=== TOTALS PAGE ===//end of quiz
	showTotals: function(){

	}
});

//============== START ROUTER ==============//
$(document).ready( function() {
  console.log('Initiating router...');
  var router = new Router();
  Backbone.history.start();
});





