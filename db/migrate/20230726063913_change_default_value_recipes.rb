class ChangeDefaultValueRecipes < ActiveRecord::Migration[6.1]
  def change
    change_column :recipes, :image,:string, default: 'https://raw.githubusercontent.com/do-community/react_rails_recipe/master/app/assets/images/Sammy_Meal.jpg'
    change_column :recipes, :name,:string,  null: false
    change_column :recipes, :ingredients,:text,  null: false
    change_column :recipes, :instruction,:text,  null: false
  end
end
