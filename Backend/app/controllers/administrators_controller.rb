class AdminsController < ApplicationController
  skip_before_action :authorize, only: [:index, :create]


  # GET /admins or /admins.json
  def index
    @admins = Admin.all
    render json: @admins
  end

  # GET /admins/1 or /admins/1.json
  def show
    admin = set_admin
    if admin

    render json: admin
    else 
      render json: {"error": "admin not found" }, status: :not_found 
    end
  end

  


  # POST /admins or /admins.json
  def create
    admin = Admin.create(admin_params)
   if admin
    render json: admin, status: :created
    else
      render json: {"error": "cannot be created" }, status: :not_acceptable
    end
  
  end


  def current_admin
    if logged_in?
      render json: current_admin.as_json(only: [:id, :name])
    else
      head :not_found
    end
  end


 

  # DELETE /admins/1 or /admins/1.json
  def destroy
    @admin.destroy

    respond_to do |format|
      format.html { redirect_to admins_url, notice: "Admin was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin
      @admin = Admin.find_by(id: params[:id])
    end

    def logged_in?
      !!current_admin
    end

    def current_admin
      @current_admin ||= Admin.find(session[:admin_id]) if session[:admin_id]
    end


    # Only allow a list of trusted parameters through.
    def admin_params
      params.permit(:name, :email, :password)
    end
end



# class AdministratorsController < ApplicationController
#   before_action :set_administrator, only: %i[ show edit update destroy ]

#   # GET /administrators or /administrators.json
#   def index
#     @administrators = Administrator.all
#   end

#   # GET /administrators/1 or /administrators/1.json
#   def show
#   end

#   # GET /administrators/new
#   def new
#     @administrator = Administrator.new
#   end

#   # GET /administrators/1/edit
#   def edit
#   end

#   # POST /administrators or /administrators.json
#   def create
#     @administrator = Administrator.new(administrator_params)

#     respond_to do |format|
#       if @administrator.save
#         format.html { redirect_to administrator_url(@administrator), notice: "Administrator was successfully created." }
#         format.json { render :show, status: :created, location: @administrator }
#       else
#         format.html { render :new, status: :unprocessable_entity }
#         format.json { render json: @administrator.errors, status: :unprocessable_entity }
#       end
#     end
#   end

#   # PATCH/PUT /administrators/1 or /administrators/1.json
#   def update
#     respond_to do |format|
#       if @administrator.update(administrator_params)
#         format.html { redirect_to administrator_url(@administrator), notice: "Administrator was successfully updated." }
#         format.json { render :show, status: :ok, location: @administrator }
#       else
#         format.html { render :edit, status: :unprocessable_entity }
#         format.json { render json: @administrator.errors, status: :unprocessable_entity }
#       end
#     end
#   end

#   # DELETE /administrators/1 or /administrators/1.json
#   def destroy
#     @administrator.destroy

#     respond_to do |format|
#       format.html { redirect_to administrators_url, notice: "Administrator was successfully destroyed." }
#       format.json { head :no_content }
#     end
#   end

#   private
#     # Use callbacks to share common setup or constraints between actions.
#     def set_administrator
#       @administrator = Administrator.find(params[:id])
#     end

#     # Only allow a list of trusted parameters through.
#     def administrator_params
#       params.require(:administrator).permit(:first_name, :last_name, :email, :password)
#     end
# end
