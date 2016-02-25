Rails.application.routes.draw do

  namespace :api do
    resources :questions
  end

  root 'pages#home'

  
end
