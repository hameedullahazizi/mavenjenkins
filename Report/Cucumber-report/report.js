$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Test login functionality",
  "description": "As a valid user, I should be able to login to the application",
  "id": "test-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "as a valid user I should be able to login to the application",
  "description": "",
  "id": "test-login-functionality;as-a-valid-user-i-should-be-able-to-login-to-the-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I open the applicatoin",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I enter my username",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter my password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I login to application",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I see the logout buttion",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_open_the_browser()"
});
formatter.result({
  "duration": 109323600,
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat org.junit.Assert.assertTrue(Assert.java:52)\n\tat stepDefinition.Login.i_open_the_browser(Login.java:12)\n\tat ✽.Given I open the browser(login.feature:6)\n",
  "status": "failed"
});
formatter.match({
  "location": "Login.i_open_the_applicatoin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.i_enter_my_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.i_enter_my_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.i_login_to_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.i_see_the_logout_buttion()"
});
formatter.result({
  "status": "skipped"
});
});