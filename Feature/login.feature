
Feature: Test the login functionality

  
    
  Scenario:
   
    Given I Open Chrome Browser
    When I go to the Salesforce application
    Then I should see the Salesforce logo
    And I enter as username
    And I enteras password
    When I click the button
  
  

    

  
  #mvn test -Dcucumber.options="--tags @Test" -DRunner="TestRunner" 
  #to run the test taf only

