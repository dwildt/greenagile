require 'test_helper'

class UserStoriesControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:user_stories)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create user_story" do
    assert_difference('UserStory.count') do
      post :create, :user_story => { }
    end

    assert_redirected_to user_story_path(assigns(:user_story))
  end

  test "should show user_story" do
    get :show, :id => user_stories(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => user_stories(:one).to_param
    assert_response :success
  end

  test "should update user_story" do
    put :update, :id => user_stories(:one).to_param, :user_story => { }
    assert_redirected_to user_story_path(assigns(:user_story))
  end

  test "should destroy user_story" do
    assert_difference('UserStory.count', -1) do
      delete :destroy, :id => user_stories(:one).to_param
    end

    assert_redirected_to user_stories_path
  end
end
