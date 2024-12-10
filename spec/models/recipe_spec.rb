require 'rails_helper'
RSpec.describe Recipe, type: :model do
  subject { Recipe.new( ingredients: "Smith", instruction: "dddddd")}
  it "is valid with valid attributes" do
    expect(subject).to be_valid
  end
  it "is not valid without a first_name" do
    subject.name=nil
    expect(subject).to_not be_valid
  end
end
