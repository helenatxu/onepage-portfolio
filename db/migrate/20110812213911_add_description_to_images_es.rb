class AddDescriptionToImagesEs < ActiveRecord::Migration
    def up
          add_column :projects, :desc_image_big1_es, :string
          add_column :projects, :desc_image_big2_es, :string
          add_column :projects, :desc_image_big3_es, :string
    end

    def down
          remove_column :projects, :desc_image_big1_es, :string
          remove_column :projects, :desc_image_big2_es, :string
          remove_column :projects, :desc_image_big3_es, :string
    end
  end