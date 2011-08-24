class AddImagesToDb < ActiveRecord::Migration
  def up
    add_column :projects, :thumb2, :string
    add_column :projects, :thumb3, :string

    change_table :projects do |t|
      t.rename :image, :thumb1
      t.rename :image_big1, :image1
      t.rename :image_big2, :image2
      t.rename :image_big3, :image3
    end
  end

  def down
    remove_column :projects, :thumb2, :string
    remove_column :projects, :thumb3, :string
  end
end