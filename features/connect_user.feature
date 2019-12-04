# Feature: connect to another user
#
#   As an administrator
#   I want to be connected to a child
#   So that they can interact with my available activities and rewards
#
# Background: "Stephen" is an administrator
#
#   Given the following users exist:
#   | username | password | name    | points | email             |
#   | stephen  | password | Stephen | 0      | stephen@email.com |
#
#   And I am user "stephen"
#
# Scenario: An administrator can connect to a child
#   Given I am on the page of the child "Bobby"
#   When I click on "Connect"
#   And I go to my profile page
#   Then "Bobby" should be under my list of connections
#
# Scenario: A child can connect to an administrator
#   Given I am on the page of the administrator "Tom"
#   When I click on "Connect"
#   And I go to my profile page
#   Then "Tom" should be under my list of connections
#
# Scenario: A child who is connected to an administrator can interact with their activities
#   Given I am on my profile page
#   And "Tom" is under my list of connections
#   When I go to the profile page of "Tom"
#   Then I should be able to view the activity "Do Chores"
#   And I should be able to click "Start Activity"
