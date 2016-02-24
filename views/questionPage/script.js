var Question = Backbone.Model.extend({
	urlRoot: 'http://localhost:3000/api/questions'
});

var Questions = Backbone.Collection.extend({
	model: Question,
	url: 'http://localhost:3000/api/questions'
});

question = new Question({id: 1});
console.log(question);

$('#qid').html(question: content);

