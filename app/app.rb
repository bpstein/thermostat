ENV['RACK_ENV'] ||= 'development'

require 'sinatra/base'
require 'json'
# require_relative 'data_mapper_setup'


class Thermostat < Sinatra::Base
  use Rack::MethodOverride
  enable :sessions
  set :session_secret, 'super secret'

  get '/' do
    response['Access-Control-Allow-Origin'] = '*'
    erb :'index'
  end

end
