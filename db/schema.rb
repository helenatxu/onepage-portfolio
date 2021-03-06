# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20110824164803) do

  create_table "projects", :force => true do |t|
    t.string   "name"
    t.text     "description"
    t.string   "work"
    t.string   "tools"
    t.string   "thumb1"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "url"
    t.string   "nombre"
    t.string   "descripcion"
    t.string   "trabajo"
    t.string   "herramientas"
    t.string   "image1"
    t.string   "image2"
    t.string   "image3"
    t.string   "desc_image_big1"
    t.string   "desc_image_big2"
    t.string   "desc_image_big3"
    t.string   "desc_image_big1_es"
    t.string   "desc_image_big2_es"
    t.string   "desc_image_big3_es"
    t.string   "thumb2"
    t.string   "thumb3"
  end

end
