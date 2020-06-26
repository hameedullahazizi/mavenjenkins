package stepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login {
	
	@Given("^I Open Chrome Browser$")
	public void i_Open_Chrome_Browser()  {
		System.out.println("this is just a test method");
	   
	}

	@When("^I go to the Salesforce application$")
	public void i_go_to_the_Salesforce_application() {
		System.out.println("this is just a test method");
		   
	}

	@Then("^I should see the Salesforce logo$")
	public void i_should_see_the_Salesforce_logo()  {
		System.out.println("this is just a test method");
		   
	}

	@Then("^I enter as username$")
	public void i_enter_as_username() throws Throwable {
		System.out.println("this is just a test method");
	}

	@Then("^I enteras password$")
	public void i_enteras_password() throws Throwable {
		System.out.println("this is just a test method");
	}

	@When("^I click the button$")
	public void i_click_the_button() throws Throwable {
		System.out.println("this is just a test method");
	}



	
//	WebDriver driver;
//	@Given("^I Open Chrome Browser$")
//	public void I_Open_Chrome_Browser()  {
//		
//		System.setProperty("webdriver.chrome.driver", "/Users/hameedazizi/Downloads/Drivers/chromedriver");
//		driver = new ChromeDriver();
//		
////		DesiredCapabilities caps = new DesiredCapabilities();
////        caps.setJavascriptEnabled(true); // not really needed: JS enabled by default
////        caps.setCapability(PhantomJSDriverService.PHANTOMJS_EXECUTABLE_PATH_PROPERTY, System.getProperty("user.dir") + "/Drivers/phantomjs");
////        driver = new PhantomJSDriver(caps);
////        
//		driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
//		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
//	
//	}
//
//	@When("^I go to the Salesforce application$")
//	public void I_go_to_the_Salesforce_application()  {
//		driver.get("https://login.salesforce.com");
//	   
//	}
//
//	@Then("^I should see the Salesforce logo$")
//	public void I_should_see_the_Salesforce_logo()  {
//		
//		boolean logo = driver.findElement(By.id("logo")).isDisplayed();
//		Assert.assertTrue(logo);
//		System.out.println("see salesforce logo");
//	    
//	}
//
//
//	
//	@Then("^I enter \"([^\"]*)\" as username$")
//	public void I_enter_as_username(String username) {
//		driver.findElement(By.id("username")).sendKeys(username);   
//
//	}
//	@Then("^I enter \"([^\"]*)\" as password$")
//	public void I_enter_as_password(String password)  {
//		driver.findElement(By.id("password")).sendKeys(password);
//	}
//
//	
//	
//	
//	@When("^I click the \"([^\"]*)\" button$")
//	public void I_click_the_button(String name) {
//		driver.findElement(By.name(name)).click();
//	    
//	}

}
