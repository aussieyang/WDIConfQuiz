# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

questions = Question.create([
  {content: 'What is your favourite animal?', speaker_no: 1},
  {content: 'How often do you wash your hands?', speaker_no: 1},
  {content: 'Is it okay to hug a stranger?', speaker_no: 2},
  {content: 'What is your favourite colour?', speaker_no: 2},
  {content: 'If Jesus had a Twitter handle, what would it be?', speaker_no: 3},
  {content: 'Ants, bees, beetles or mosquitos?', speaker_no: 3},
  {content: 'If alcohol was never invented, what would you drink instead?', speaker_no: 4},
  {content: 'What Olympic event would you most likely partake in?', speaker_no: 4},
  {content: 'If you had a son named Greg, what would you name your daughter?', speaker_no: 5},
  {content: 'What shape should eggs be?', speaker_no: 5},
  ]);
