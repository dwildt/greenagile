require 'test_helper'

class FeatureTest < ActiveSupport::TestCase
  # Replace this with your real tests.
  test "caminho feliz" do
     @count = Feature.count
     @f = Feature.new
	 @f.title = "teste"
     @f.description = "teste"
     @f.status = "done"
	 @f.category = "feature"
	 @f.roi = 0
     @f.save
     assert Feature.count == @count+1
     @f = Feature.new
	 @f.title = "teste"
     @f.description = "teste"
     @f.status = "done"
	 @f.category = "spike"
	 @f.roi = 0
     @f.save
     assert Feature.count == @count+2
  end
  
  test "campo category nao preenchido" do
     #@count = Feature.count
     @f = Feature.new
	 @f.title = "teste"
     @f.description = "teste"
     @f.status = "done"
     assert @f.save == false
     #assert Feature.count == @count
  end
  test "valida campos" do
     @f = Feature.new
	 @f.category = "spike"
	 @f.title = "teste"
     @f.description = "teste"
     @f.status = "done"
     assert @f.save == false
	 @f.roi= -1
	 assert @f.save == false
	 @f.roi= 0
	 assert @f.save 
	 @f.title="12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901"
     assert @f.save == false
	 @f.title = "teste"
	 assert @f.save 
  end


end
