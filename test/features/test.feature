Feature: user login

  Scenario: Verify user is able to login
    Given launch application
    When enter user name
    And enter password
    And click login
    Then verify user is logged in
