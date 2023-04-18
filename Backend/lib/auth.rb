
require 'jwt'

class Auth
  ALGORITHM = 'HS256'.freeze

  def self.encode(payload)
    JWT.encode(payload, secret_key, ALGORITHM)
  end

  def self.decode(token)
    JWT.decode(token, secret_key, true, algorithm: ALGORITHM).first
  end

  def self.secret_key
    Rails.application.secrets.secret_key_base
  end
end
