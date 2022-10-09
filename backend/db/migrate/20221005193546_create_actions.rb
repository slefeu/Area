class CreateActions < ActiveRecord::Migration[7.0]
  def change
    create_table :actions do |t|
      t.string :service
      t.string :class
      t.jsonb :options
      t.references :widget, null: false, foreign_key: true

      t.timestamps
    end
  end
end
