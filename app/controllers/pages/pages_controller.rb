class PagesController < ApplicationController

  def home
    render :application, layout: 'home'
  end

end
