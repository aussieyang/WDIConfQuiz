# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Question.delete_all

questions = Question.create([
  {content: 'What is your favourite animal?', speaker_no: 1, a: 'Monkeys', b: 'Turtles', c: 'Elephants', d: 'Lemurs'},
  {content: 'How often do you wash your hands?', speaker_no: 1, a: 'Every 20mins', b: 'Every Hour', c: 'Once a Day', d: 'Never'},
  {content: 'Is it okay to hug a stranger?', speaker_no: 2, a: 'Definitely', b: 'Sometimes', c: 'Never', d: 'If they are high'},
  {content: 'What is your favourite colour?', speaker_no: 2, a: 'Linen', b: 'Tomato', c: 'Plum', d: 'Fuche'},
  {content: 'If Jesus had a Twitter handle, what would it be?', speaker_no: 3, a: 'Big J', b: 'JC2000', c: 'JC in the House', d: 'Son of God MF'},
  {content: 'Ants, bees, beetles or mosquitos?', speaker_no: 3, a: 'Ants', b: 'Bees', c: 'Beetles', d: 'Mosquitos'},
  {content: 'If alcohol was never invented, what would you drink instead?', speaker_no: 4, a: 'Water', b: 'Coke', c: 'Tomato Soup', d: 'Lemon Juice'},
  {content: 'What Olympic event would you most likely partake in?', speaker_no: 4, a: 'Fencing', b: 'Twirling', c: 'Trampolining', d: 'Power-walking'},
  {content: 'If you had a son named Greg, what would you name your daughter?', speaker_no: 5, a: 'Sam', b: 'Pat', c: 'Nic', d: 'Val'},
  {content: 'What shape should eggs be?', speaker_no: 5, a: 'Cubes', b: 'Perfect Spheres', c: 'Pyramids', d: 'Star-shaped'},
  ]);
