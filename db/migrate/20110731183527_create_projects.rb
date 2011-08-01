class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.text :description
      t.string :work
      t.string :tools
      t.string :image

      t.timestamps
    end
  end
end
