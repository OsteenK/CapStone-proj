require "application_system_test_case"

class BeneficiariesTest < ApplicationSystemTestCase
  setup do
    @beneficiary = beneficiaries(:one)
  end

  test "visiting the index" do
    visit beneficiaries_url
    assert_selector "h1", text: "Beneficiaries"
  end

  test "should create beneficiary" do
    visit beneficiaries_url
    click_on "New beneficiary"

    fill_in "Charity", with: @beneficiary.charity_id
    fill_in "Description", with: @beneficiary.description
    fill_in "Img url", with: @beneficiary.img_url
    fill_in "Items", with: @beneficiary.items
    fill_in "Location", with: @beneficiary.location
    fill_in "Name", with: @beneficiary.name
    click_on "Create Beneficiary"

    assert_text "Beneficiary was successfully created"
    click_on "Back"
  end

  test "should update Beneficiary" do
    visit beneficiary_url(@beneficiary)
    click_on "Edit this beneficiary", match: :first

    fill_in "Charity", with: @beneficiary.charity_id
    fill_in "Description", with: @beneficiary.description
    fill_in "Img url", with: @beneficiary.img_url
    fill_in "Items", with: @beneficiary.items
    fill_in "Location", with: @beneficiary.location
    fill_in "Name", with: @beneficiary.name
    click_on "Update Beneficiary"

    assert_text "Beneficiary was successfully updated"
    click_on "Back"
  end

  test "should destroy Beneficiary" do
    visit beneficiary_url(@beneficiary)
    click_on "Destroy this beneficiary", match: :first

    assert_text "Beneficiary was successfully destroyed"
  end
end
