$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Test the login functionality",
  "description": "",
  "id": "test-the-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "",
  "description": "",
  "id": "test-the-login-functionality;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I Open Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I go to the Salesforce application",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see the Salesforce logo",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I enter as username",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enteras password",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click the button",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_Open_Chrome_Browser()"
});
formatter.result({
  "duration": 81364237,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_go_to_the_Salesforce_application()"
});
formatter.result({
  "duration": 38646,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_the_Salesforce_logo()"
});
formatter.result({
  "duration": 42556,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_enter_as_username()"
});
formatter.result({
  "duration": 44887,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_enteras_password()"
});
formatter.result({
  "duration": 51909,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_the_button()"
});
formatter.result({
  "duration": 52454,
  "status": "passed"
});
});