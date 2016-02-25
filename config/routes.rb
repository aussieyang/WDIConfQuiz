Rails.application.routes.draw do

  get "/" => "pages#home"

  namespace :api do
    resources :questions
  end

end
