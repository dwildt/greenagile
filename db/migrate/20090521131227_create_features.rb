class CreateFeatures < ActiveRecord::Migration
  def self.up
    create_table :features do |t|
      t.string :title
      t.text :description
      t.integer :priority
      t.string :status

      t.timestamps
    end
  end

  def self.down
    drop_table :features
  end
end
