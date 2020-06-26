
Feature: Test the login functionality

  
    #this this will execute the duplicate code for all the scenarios 
   Background:
   
    Given I Open Chrome Browser
    When I go to the Salesforce application
    Then I should see the Salesforce logo
    #And I enter valid username and valid password
    And I enter "batch03@codegator.us.qa" as username
    And I enter "Pa55word" as password
    When I click the "Login" button
  
  @Lead
  Scenario:
  When I click the "Leads" buttonn 
  Then I chick the "new" button
  And I enter "Azizi" for "name_lastlea2" tab
  And I enter "Azizi's" for "lea3" button
  And I enter "Working - Contacted" for "lea13" button
  And I click "save" button
  
  
 @Account
  Scenario Outline: Test Using Valid Credentials
   
    #And I enter "<username>" as username
    #And I enter "<password>" as password
   
    Then I should see the logout link
    And I create an account
    |Account Name|Account Number|Account Site|
    |Azizi       |1011101       |VA          |
    
    Examples:
    |username|password|
    |batch03@codegator.us.qa|Pa55word|
    

  
  #mvn test -Dcucumber.options="--tags @Test" -DRunner="TestRunner" 
  #to run the test taf only

