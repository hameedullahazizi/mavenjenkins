package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "Feature", 
                 glue="stepDefinition", 
                 monochrome=true,
                 plugin= {"rerun:rerun/failds.txt"}
                 )

public class Failedcases {

}
