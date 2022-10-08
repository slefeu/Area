class CreateActions < ActiveRecord::Migration[7.0]
  def change
    create_table :actions do |t|
      t.string :klass
      t.jsonb :options

      t.timestamps
    end
  end
end
