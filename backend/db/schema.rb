# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

<<<<<<< HEAD
ActiveRecord::Schema[7.0].define(version: 2022_10_08_142140) do
=======
ActiveRecord::Schema[7.0].define(version: 2022_10_05_193735) do
>>>>>>> 4cb61f2c70f482c142a6f9eb65bfcf346a03681b
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "actions", force: :cascade do |t|
<<<<<<< HEAD
    t.string "klass", null: false
    t.jsonb "options", null: false
    t.bigint "widget_id"
=======
    t.string "service"
    t.string "class"
    t.jsonb "options"
    t.bigint "widget_id", null: false
>>>>>>> 4cb61f2c70f482c142a6f9eb65bfcf346a03681b
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["widget_id"], name: "index_actions_on_widget_id"
  end

  create_table "jwt_denylist", force: :cascade do |t|
    t.string "jti", null: false
    t.datetime "exp", precision: nil, null: false
    t.index ["jti"], name: "index_jwt_denylist_on_jti"
  end

  create_table "reactions", force: :cascade do |t|
<<<<<<< HEAD
    t.string "klass", null: false
    t.jsonb "options", null: false
    t.bigint "action_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["action_id"], name: "index_reactions_on_action_id"
=======
    t.string "service"
    t.string "class"
    t.bigint "widget_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["widget_id"], name: "index_reactions_on_widget_id"
>>>>>>> 4cb61f2c70f482c142a6f9eb65bfcf346a03681b
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.boolean "admin", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "widgets", force: :cascade do |t|
    t.string "name"
<<<<<<< HEAD
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
=======
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
>>>>>>> 4cb61f2c70f482c142a6f9eb65bfcf346a03681b
    t.index ["user_id"], name: "index_widgets_on_user_id"
  end

  add_foreign_key "actions", "widgets"
<<<<<<< HEAD
  add_foreign_key "reactions", "actions"
=======
  add_foreign_key "reactions", "widgets"
>>>>>>> 4cb61f2c70f482c142a6f9eb65bfcf346a03681b
  add_foreign_key "widgets", "users"
end
