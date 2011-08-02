class AddExternalUrl < ActiveRecord::Migration

  def up
    add_column :projects, :url, :string
  end

  def down
    remove_column :projects, :url, :string 
  end
end
