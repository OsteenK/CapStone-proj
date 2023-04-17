require "application_system_test_case"

class AdministratorsTest < ApplicationSystemTestCase
  setup do
    @administrator = administrators(:one)
  end

  test "visiting the index" do
    visit administrators_url
    assert_selector "h1", text: "Administrators"
  end

  test "should create administrator" do
    visit administrators_url
    click_on "New administrator"

    fill_in "Email", with: @administrator.email
    fill_in "First name", with: @administrator.first_name
    fill_in "Last name", with: @administrator.last_name
    fill_in "Password", with: @administrator.password
    click_on "Create Administrator"

    assert_text "Administrator was successfully created"
    click_on "Back"
  end

  test "should update Administrator" do
    visit administrator_url(@administrator)
    click_on "Edit this administrator", match: :first

    fill_in "Email", with: @administrator.email
    fill_in "First name", with: @administrator.first_name
    fill_in "Last name", with: @administrator.last_name
    fill_in "Password", with: @administrator.password
    click_on "Update Administrator"

    assert_text "Administrator was successfully updated"
    click_on "Back"
  end

  test "should destroy Administrator" do
    visit administrator_url(@administrator)
    click_on "Destroy this administrator", match: :first

    assert_text "Administrator was successfully destroyed"
  end
end
