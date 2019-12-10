# Feature: allow an administrator to create activities
#
#   As an administrator
#   I want to create new activities
#   So that children can view and complete them
#
# Background: "Stephen" is an administrator
#
#   Given the following users exist:
#   | username | password | name    | points | email             |
#   | stephen  | password | Stephen | 0      | stephen@email.com |
#
#   And I am user "stephen"
#
# Scenario: go to create activity page
#   Given I am on my profile page
#   When I press "Create Activity"
#   Then I should be on the Create Activity page
#
# Scenario: create and view activity
#   Given I am on the Create Activity page
#   When I fill in the following:
#   | Title       | Do Chores       |
#   | Description | Do your chores! |
#   | Points      | 10              |
#   | Frequency   | Once a day      |
#   | Status      | Not completed   |
#   And I press "Create"
#   Then I should be on my profile page
#   And I should see the activity "Do Chores"
#   When I press "Do Chores"
#   Then I should be on the Activity Page for "Do Chores"
#   And I should see the description "Do your chores!"
