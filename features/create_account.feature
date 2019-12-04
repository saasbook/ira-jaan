# Feature: allow a user to create a new administrator account
#
#   As a new user
#   I want to create a new administrator account
#   So that I can use the virtual parents platform
#
# Scenario: Go to create account page
#   Given I am on the landing page
#   When I press the "Get Started" button
#   Then I should be on the create account page
#
# Scenario: Create an administrator account
#   Given I am on the create account page
#   When I press the "Administrator" tab
#   Then I should be on the create account forms for an administrator
#   And I should see a "Username" field
#   And I should see a "Email" field
#
# Scenario: Submit account creation form
#   Given I am on the create account forms for a parent
#   When I fill in the "Username" field with "Stephen"
#   And I fill in the "Email" field with "stephen@gmail.com"
#   And I fill in the "Password" field with "password"
#   And I press the "Submit" button
#   Then I should be on the home page
