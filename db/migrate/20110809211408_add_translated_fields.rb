class AddTranslatedFields < ActiveRecord::Migration
  def up
        add_column :projects, :nombre, :string
        add_column :projects, :descripcion, :string
        add_column :projects, :trabajo, :string
        add_column :projects, :herramientas, :string
  end

  def down
        remove_column :projects, :nombre, :string
        remove_column :projects, :descripcion, :string
        remove_column :projects, :trabajo, :string
        remove_column :projects, :herramientas, :string
  end
end