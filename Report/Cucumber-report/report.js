$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Test the login functionality",
  "description": "",
  "id": "test-the-login-functionality",
  "keyword": "Feature"
});
formatter.background({
  "comments": [
    {
      "line": 5,
      "value": "#this this will execute the duplicate code for all the scenarios"
    }
  ],
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
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
  "comments": [
    {
      "line": 11,
      "value": "#And I enter valid username and valid password"
    }
  ],
  "line": 12,
  "name": "I enter \"batch03@codegator.us.qa\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"Pa55word\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click the \"Login\" button",
  "keyword": "When "
});
formatter.match({
  "location": "Login.I_Open_Chrome_Browser()"
});
formatter.result({
  "duration": 173348858,
  "error_message": "java.lang.IllegalStateException: The driver is not executable: /Users/hameedazizi/eclipse-new/com.codegatore.cucumber/Drivers/phantomjs\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:127)\n\tat org.openqa.selenium.phantomjs.PhantomJSDriverService.findPhantomJS(PhantomJSDriverService.java:245)\n\tat org.openqa.selenium.phantomjs.PhantomJSDriverService.createDefaultService(PhantomJSDriverService.java:181)\n\tat org.openqa.selenium.phantomjs.PhantomJSDriver.\u003cinit\u003e(PhantomJSDriver.java:105)\n\tat stepDefinition.Login.I_Open_Chrome_Browser(Login.java:32)\n\tat ✽.Given I Open Chrome Browser(login.feature:8)\n",
  "status": "failed"
});
formatter.match({
  "location": "Login.I_go_to_the_Salesforce_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.I_should_see_the_Salesforce_logo()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "batch03@codegator.us.qa",
      "offset": 9
    }
  ],
  "location": "Login.I_enter_as_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pa55word",
      "offset": 9
    }
  ],
  "location": "Login.I_enter_as_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 13
    }
  ],
  "location": "Login.I_click_the_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "",
  "description": "",
  "id": "test-the-login-functionality;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@Lead"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I click the \"Leads\" buttonn",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I chick the \"new\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I enter \"Azizi\" for \"name_lastlea2\" tab",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter \"Azizi\u0027s\" for \"lea3\" button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter \"Working - Contacted\" for \"lea13\" button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click \"save\" button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Leads",
      "offset": 13
    }
  ],
  "location": "Login.I_click_the_buttonn(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "new",
      "offset": 13
    }
  ],
  "location": "Login.I_chick_the_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Azizi",
      "offset": 9
    },
    {
      "val": "name_lastlea2",
      "offset": 21
    }
  ],
  "location": "Login.I_enter_for_tab(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Azizi\u0027s",
      "offset": 9
    },
    {
      "val": "lea3",
      "offset": 23
    }
  ],
  "location": "Login.I_enter_for_button(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Working - Contacted",
      "offset": 9
    },
    {
      "val": "lea13",
      "offset": 35
    }
  ],
  "location": "Login.I_enter_for_button(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 9
    }
  ],
  "location": "Login.I_click_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Test Using Valid Credentials",
  "description": "",
  "id": "test-the-login-functionality;test-using-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Account"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 29,
      "value": "#And I enter \"\u003cusername\u003e\" as username"
    },
    {
      "line": 30,
      "value": "#And I enter \"\u003cpassword\u003e\" as password"
    }
  ],
  "line": 32,
  "name": "I should see the logout link",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I create an account",
  "rows": [
    {
      "cells": [
        "Account Name",
        "Account Number",
        "Account Site"
      ],
      "line": 34
    },
    {
      "cells": [
        "Azizi",
        "1011101",
        "VA"
      ],
      "line": 35
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "test-the-login-functionality;test-using-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 38,
      "id": "test-the-login-functionality;test-using-valid-credentials;;1"
    },
    {
      "cells": [
        "batch03@codegator.us.qa",
        "Pa55word"
      ],
      "line": 39,
      "id": "test-the-login-functionality;test-using-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "comments": [
    {
      "line": 5,
      "value": "#this this will execute the duplicate code for all the scenarios"
    }
  ],
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
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
  "comments": [
    {
      "line": 11,
      "value": "#And I enter valid username and valid password"
    }
  ],
  "line": 12,
  "name": "I enter \"batch03@codegator.us.qa\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"Pa55word\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click the \"Login\" button",
  "keyword": "When "
});
formatter.match({
  "location": "Login.I_Open_Chrome_Browser()"
});
formatter.result({
  "duration": 321141,
  "error_message": "java.lang.IllegalStateException: The driver is not executable: /Users/hameedazizi/eclipse-new/com.codegatore.cucumber/Drivers/phantomjs\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:127)\n\tat org.openqa.selenium.phantomjs.PhantomJSDriverService.findPhantomJS(PhantomJSDriverService.java:245)\n\tat org.openqa.selenium.phantomjs.PhantomJSDriverService.createDefaultService(PhantomJSDriverService.java:181)\n\tat org.openqa.selenium.phantomjs.PhantomJSDriver.\u003cinit\u003e(PhantomJSDriver.java:105)\n\tat stepDefinition.Login.I_Open_Chrome_Browser(Login.java:32)\n\tat ✽.Given I Open Chrome Browser(login.feature:8)\n",
  "status": "failed"
});
formatter.match({
  "location": "Login.I_go_to_the_Salesforce_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.I_should_see_the_Salesforce_logo()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "batch03@codegator.us.qa",
      "offset": 9
    }
  ],
  "location": "Login.I_enter_as_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pa55word",
      "offset": 9
    }
  ],
  "location": "Login.I_enter_as_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 13
    }
  ],
  "location": "Login.I_click_the_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 39,
  "name": "Test Using Valid Credentials",
  "description": "",
  "id": "test-the-login-functionality;test-using-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Account"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 29,
      "value": "#And I enter \"\u003cusername\u003e\" as username"
    },
    {
      "line": 30,
      "value": "#And I enter \"\u003cpassword\u003e\" as password"
    }
  ],
  "line": 32,
  "name": "I should see the logout link",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I create an account",
  "rows": [
    {
      "cells": [
        "Account Name",
        "Account Number",
        "Account Site"
      ],
      "line": 34
    },
    {
      "cells": [
        "Azizi",
        "1011101",
        "VA"
      ],
      "line": 35
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Login.I_should_see_the_logout_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.i_create_an_account(DataTable)"
});
formatter.result({
  "status": "skipped"
});
});