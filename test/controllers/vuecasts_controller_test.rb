require 'test_helper'

class VuecastsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get vuecasts_index_url
    assert_response :success
  end

end
