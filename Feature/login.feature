Feature: Test login functionality
As a valid user, I should be able to login to the application

  Scenario: as a valid user I should be able to login to the application
  
  Given I open the browser
  Then I open the applicatoin
  And I enter my username 
  And I enter my password
  And I login to application
  And I see the logout buttion

