Rails.application.routes.draw do

  namespace :api do
    resources :questions
  end

  namespace :api do
    resources :quizzes
  end


  root 'pages#home'


end
