Feature:
  Scenario: The number of items in a list
    Given I have opened the Sports page
    When I click on the More button
    Then I will see 19 sports

  Scenario: The content of a list
    Given I have opened the Sports page
    When I click on the More button
    Then I will see these sports
      | Premier League |
      | Scottish Prem  |
      | Championship   |