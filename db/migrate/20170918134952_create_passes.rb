class CreatePasses < ActiveRecord::Migration[5.1]
  def change
    create_table :passes do |t|

      t.timestamps
    end
  end
end
