class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      session_params[:username],
      session_params[:password]
    )
    if @user
      sign_in!(@user)
      render 'api/users/show'
    else
      render json: ['Invalid username/password combination'], status: 401
    end
  end

  def destroy
    if signed_in?
      sign_out!
      render json: {}
    else
      render json: ['Nobody signed in'], status: 404
    end
  end

  private

  def session_params
    params.require(:user).permit(:username, :password)
  end
end
