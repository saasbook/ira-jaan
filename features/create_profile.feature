# Feature: allow a user to create and edit their profile page
#
#   As a teacher or parent
#   I want to create and edit my profile page
#   So that it displays information about me
#
# Background: "Stephen" is an administrator
#
#   Given the following users exist:
#   | username | password | name    | points | email             |
#   | stephen  | password | Stephen | 0      | stephen@email.com |
#
#   And I am user "stephen"
#
# Scenario: go to edit profile page
#   Given I am on my profile page
#   When I click "Edit Profile"
#   Then I should be on the Edit Profile page
#
# Scenario: change name
#   Given I am on the Edit Profile page
#   When I enter "Steven" into the name field
#   And I press "Save"
#   Then I should be on my profile page
#   And I should see that my "Name" is "Steven"
