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
  "duration": 3478582646,
  "status": "passed"
});
formatter.match({
  "location": "Login.I_go_to_the_Salesforce_application()"
});
formatter.result({
  "duration": 610255415,
  "status": "passed"
});
formatter.match({
  "location": "Login.I_should_see_the_Salesforce_logo()"
});
formatter.result({
  "duration": 76080771,
  "status": "passed"
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
  "duration": 321944627,
  "status": "passed"
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
  "duration": 87020174,
  "status": "passed"
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
  "duration": 68329814,
  "status": "passed"
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
  "duration": 3046754200,
  "status": "passed"
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
  "duration": 534826003,
  "status": "passed"
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
  "duration": 321682497,
  "status": "passed"
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
  "duration": 111886907,
  "status": "passed"
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
  "duration": 114410643,
  "status": "passed"
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
  "duration": 1385986055,
  "status": "passed"
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
  "duration": 1528960602,
  "status": "passed"
});
formatter.match({
  "location": "Login.I_go_to_the_Salesforce_application()"
});
formatter.result({
  "duration": 666225496,
  "status": "passed"
});
formatter.match({
  "location": "Login.I_should_see_the_Salesforce_logo()"
});
formatter.result({
  "duration": 64214626,
  "status": "passed"
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
  "duration": 828415155,
  "status": "passed"
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
  "duration": 362548984,
  "status": "passed"
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
  "duration": 1105894271,
  "status": "passed"
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
  "duration": 1511856747,
  "status": "passed"
});
formatter.match({
  "location": "Login.I_create_an_account(DataTable)"
});
formatter.result({
  "duration": 1454358,
  "error_message": "cucumber.runtime.CucumberException: Can\u0027t convert DataTable to List\u003cMap\u003cnull,null\u003e\u003e\n\tat cucumber.runtime.table.TableConverter.toMaps(TableConverter.java:198)\n\tat cucumber.api.DataTable.asMaps(DataTable.java:95)\n\tat stepDefinition.Login.I_create_an_account(Login.java:82)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\n",
  "status": "failed"
});
});