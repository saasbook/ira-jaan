# Feature: add points to administrator profile
#
#   As a teacher or parent
#   I want to add points to my account
#   So that my child connections can gain points upon activity completion
#
# Scenario: add points
#   Given I am on my profile page
#   And I have 10 points
#   And I press "Add Points"
#   Then I should be on the Add Points page
#   When I fill in "Points" with "10"
#   And I press "Confirm"
#   Then I should be on my profile page
#   And I should have 20 points
