class ApplicationController < ActionController::Base
 protect_from_forgery with: :null_session
 before_action :authorize
      
        def encode_token(payload)
          # should store secret in env variable
          JWT.encode(payload, 'my_s3cr3t')
        end
      
        def auth_header
          # { Authorization: 'Bearer <token>' }
          request.headers['Authorization']
        end
      
        def decoded_token
          if auth_header
            token = auth_header.split(' ')[1]
            # header: { 'Authorization': 'Bearer <token>' }
            begin
              JWT.decode(token, 'my_s3cr3t', true, algorithm: 'HS256')
            rescue JWT::DecodeError
              nil
            end
          end
        end
      
        def set_current_user
          if decoded_token
            user_id = decoded_token[0]['user_id']
          
      
            if user_id
              @current_user = User.find_by(id: user_id)
           
          end
        end 
        end
        
        def logged_in?
          !!@current_user 
        end
        
        def logged
          render json: { logged_in: logged_in?, current_user: @current_user }, include: :charities
        end
      
       
        
        def authorized_donor
          render json: { message: 'Please log in as a donor' }, status: :unauthorized unless logged_in? && @current_user.is_a?(User)
        end

        def authorized_charity
          render json: { message: 'Please log in as a charity' }, status: :unauthorized unless logged_in? && @current_user.is_a?(User)
        end
      
        def authorized_admin
          render json: { message: 'Please log in as an admin' }, status: :unauthorized unless logged_in? && @current_user.is_a?(Admin)
        end
      
        
        def authorize
          set_current_user 
        
          if logged_in?
            if @current_user.is_a?(Donor) || @current_user.is_a?(Charity) || @current_user.is_a?(Admin) 
              return true
            end
          end
        
          render json: { message: 'Please log in as a donor or as a charity' }, status: :unauthorized
        end
        
      end
      

end
