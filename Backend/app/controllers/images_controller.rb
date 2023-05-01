class ImagesController < ApplicationController

    def index
        response = Cloudinary::Api.resources(type: "image")
        images = response["resources"].map { |resource| resource["secure_url"] }
        render json: { images: images }
    end

end
