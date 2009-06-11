class AddFeatureRoi < ActiveRecord::Migration
  def self.up
     add_column "features", "roi", "integer"
  end

  def self.down
    remove_column "features", "roi" 
  end
end
