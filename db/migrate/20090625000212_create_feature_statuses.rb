class CreateFeatureStatuses < ActiveRecord::Migration
  def self.up
    create_table :feature_statuses do |t|
      t.string :name
      t.text :displayName

      t.timestamps
    end
  end

  def self.down
    drop_table :feature_statuses
  end
end
