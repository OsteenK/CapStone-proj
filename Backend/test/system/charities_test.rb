require "application_system_test_case"

class CharitiesTest < ApplicationSystemTestCase
  setup do
    @charity = charities(:one)
  end

  test "visiting the index" do
    visit charities_url
    assert_selector "h1", text: "Charities"
  end

  test "should create charity" do
    visit charities_url
    click_on "New charity"

    fill_in "Admin", with: @charity.admin_id
    fill_in "Description", with: @charity.description
    fill_in "Email", with: @charity.email
    fill_in "Goal amount", with: @charity.goal_amount
    fill_in "Img url", with: @charity.img_url
    fill_in "Name", with: @charity.name
    fill_in "Password", with: @charity.password
    fill_in "Total donations", with: @charity.total_donations
    click_on "Create Charity"

    assert_text "Charity was successfully created"
    click_on "Back"
  end

  test "should update Charity" do
    visit charity_url(@charity)
    click_on "Edit this charity", match: :first

    fill_in "Admin", with: @charity.admin_id
    fill_in "Description", with: @charity.description
    fill_in "Email", with: @charity.email
    fill_in "Goal amount", with: @charity.goal_amount
    fill_in "Img url", with: @charity.img_url
    fill_in "Name", with: @charity.name
    fill_in "Password", with: @charity.password
    fill_in "Total donations", with: @charity.total_donations
    click_on "Update Charity"

    assert_text "Charity was successfully updated"
    click_on "Back"
  end

  test "should destroy Charity" do
    visit charity_url(@charity)
    click_on "Destroy this charity", match: :first

    assert_text "Charity was successfully destroyed"
  end
end
