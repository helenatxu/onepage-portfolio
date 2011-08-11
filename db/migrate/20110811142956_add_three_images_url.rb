class AddThreeImagesUrl < ActiveRecord::Migration

  def up
        add_column :projects, :image_big1, :string
        add_column :projects, :image_big2, :string
        add_column :projects, :image_big3, :string
  end

  def down
        remove_column :projects, :image_big1, :string
        remove_column :projects, :image_big2, :string
        remove_column :projects, :image_big3, :string
  end
end