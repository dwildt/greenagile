class CreateFeatures < ActiveRecord::Migration
  def self.up
    create_table :features do |t|
      t.string :title
      t.text :description
      t.integer :size
      t.integer :priority
      t.string :status
      t.integer :iteration
      t.integer :release
      t.string :type
      t.text :acceptanceCriteria
      t.date :doneDate

      t.timestamps
    end
  end

  def self.down
    drop_table :features
  end
end
