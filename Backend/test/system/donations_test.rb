require "application_system_test_case"

class DonationsTest < ApplicationSystemTestCase
  setup do
    @donation = donations(:one)
  end

  test "visiting the index" do
    visit donations_url
    assert_selector "h1", text: "Donations"
  end

  test "should create donation" do
    visit donations_url
    click_on "New donation"

    check "Anonymous" if @donation.anonymous
    fill_in "Charity", with: @donation.charity_id
    fill_in "Donation amount", with: @donation.donation_amount
    fill_in "Donor", with: @donation.donor_id
    click_on "Create Donation"

    assert_text "Donation was successfully created"
    click_on "Back"
  end

  test "should update Donation" do
    visit donation_url(@donation)
    click_on "Edit this donation", match: :first

    check "Anonymous" if @donation.anonymous
    fill_in "Charity", with: @donation.charity_id
    fill_in "Donation amount", with: @donation.donation_amount
    fill_in "Donor", with: @donation.donor_id
    click_on "Update Donation"

    assert_text "Donation was successfully updated"
    click_on "Back"
  end

  test "should destroy Donation" do
    visit donation_url(@donation)
    click_on "Destroy this donation", match: :first

    assert_text "Donation was successfully destroyed"
  end
end
