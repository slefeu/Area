class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false
      t.integer :user_type, null: false, default: 0
      t.string :password, null: false

      t.timestamps
    end
  end
end
