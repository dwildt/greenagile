class AlterFeatureType < ActiveRecord::Migration
  def self.up
	rename_column "features", "type", "category" 
  end

  def self.down
	rename_column "features", "category", "type" 
  end
end
