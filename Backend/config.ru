# This file is used by Rack-based servers to start the application.

require_relative "config/environment"

run Rails.application
Rails.application.load_server

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.
# Read more: https://github.com/cyu/rack-cors

use Rack::Cors do
    allow do
      origins "*"
  
      resource "*",
        headers: :any,
        methods: [:get, :post, :put, :patch, :delete, :options, :head]
    end
end