Rails.application.routes.draw do

  get '/' => 'dashboard#index'
  get '/dashboard' => 'dashboard#quiz'

  namespace :api do
    resources :questions
  end
  
end
