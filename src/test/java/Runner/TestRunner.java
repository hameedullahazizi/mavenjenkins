package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "Feature", 
                 glue="stepDefinition", 
                 dryRun=false, 
                 monochrome=true, 
                 plugin= {"rerun:rerun/failds.txt", 
                		 "pretty",
                		 "html:Report/Cucumber-report",
                		 "json:Report/Cucumber-report.json"})

public class TestRunner {

}
