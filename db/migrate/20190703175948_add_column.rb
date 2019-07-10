class AddColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :username, :string, :null => false, :default => :email
    reversible do |dir|
      dir.up { User.all.each { |u| u.update(username: u.email) } }
    end
    add_index :users, :username, :unique => true
  end
end