require 'test_helper'

class FeatureStatusesControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:feature_statuses)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create feature_status" do
    assert_difference('FeatureStatus.count') do
      post :create, :feature_status => { }
    end

    assert_redirected_to feature_status_path(assigns(:feature_status))
  end

  test "should show feature_status" do
    get :show, :id => feature_statuses(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => feature_statuses(:one).to_param
    assert_response :success
  end

  test "should update feature_status" do
    put :update, :id => feature_statuses(:one).to_param, :feature_status => { }
    assert_redirected_to feature_status_path(assigns(:feature_status))
  end

  test "should destroy feature_status" do
    assert_difference('FeatureStatus.count', -1) do
      delete :destroy, :id => feature_statuses(:one).to_param
    end

    assert_redirected_to feature_statuses_path
  end
end
