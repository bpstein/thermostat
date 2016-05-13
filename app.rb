# ENV['RACK_ENV'] ||= 'development'

require 'sinatra/base'
require 'json'


class Thermostat < Sinatra::Base
  enable :sessions
  set :session_secret, 'super secret'

  get '/' do
    # response['Access-Control-Allow-Origin'] = '*'
    File.read('index.html')
  end

  # post '/temperature' do 
  #   session[:temperature] = params[:temperature] 
  # end

  # get '/temperature' do 
  #   20
  # end

  run! if app_file == $0

end
