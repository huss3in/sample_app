class CreateUsers < ActiveRecord::Migration[5.1]
  def up
    create_table :users do |t|
    	t.integer 
      t.timestamps
    end
  end
  def down
  	drop_table :users
  end
end
