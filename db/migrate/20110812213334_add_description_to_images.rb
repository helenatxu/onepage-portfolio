class AddDescriptionToImages < ActiveRecord::Migration
  def up
        add_column :projects, :desc_image_big1, :string
        add_column :projects, :desc_image_big2, :string
        add_column :projects, :desc_image_big3, :string
  end

  def down
        remove_column :projects, :desc_image_big1, :string
        remove_column :projects, :desc_image_big2, :string
        remove_column :projects, :desc_image_big3, :string
  end
end