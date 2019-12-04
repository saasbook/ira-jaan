# Feature: allow a user to login to their administrator account
#
#   As a current user
#   I want to log in
#   So that I can use the virtual parents platform
#
# Background: "Stephen" is an administrator
#
#   Given the following users exist:
#   | username | password | name    | points | email             |
#   | stephen  | password | Stephen | 0      | stephen@email.com |
#
#   And I am user "stephen"
#
# Scenario: Go to log in page
#   Given I am on the landing page
#   When I press the "Log In" button
#   Then I should be on the log in page
#   And I should see a "Username" field
#   And I should see a "Password" field
#
# Scenario: Log in with correct credentials
#   Given I am on the log in page
#   When I fill in the "Username" field with "Stephen"
#   And I fill in the "Password" field with "password"
#   And I press the "Log In" button
#   Then I should be on the home page
#   And I should be logged in as "Stephen"
