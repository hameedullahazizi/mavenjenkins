package stepDefinition;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login {
	
	WebDriver driver;
	@Given("^I Open Chrome Browser$")
	public void I_Open_Chrome_Browser()  {
		
		System.setProperty("webdriver.chrome.driver", "/Users/hameedazizi/Downloads/Drivers/chromedriver");
		driver = new ChromeDriver();
		driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	
	}

	@When("^I go to the Salesforce application$")
	public void I_go_to_the_Salesforce_application()  {
		driver.get("https://login.salesforce.com");
	   
	}

	@Then("^I should see the Salesforce logo$")
	public void I_should_see_the_Salesforce_logo()  {
		
		boolean logo = driver.findElement(By.id("logo")).isDisplayed();
		Assert.assertTrue(logo);
		System.out.println("see salesforce logo");
	    
	}


	
	@Then("^I enter \"([^\"]*)\" as username$")
	public void I_enter_as_username(String username) {
		driver.findElement(By.id("username")).sendKeys(username);   

	}
	@Then("^I enter \"([^\"]*)\" as password$")
	public void I_enter_as_password(String password)  {
		driver.findElement(By.id("password")).sendKeys(password);
	}

	
	
//	@When("^I click the login button$")
//	public void I_click_the_login_button()  {
//		
//		driver.findElement(By.id("Login")).click();
//		System.out.println("logo is there");
//	  
//	}
	
	@When("^I click the \"([^\"]*)\" button$")
	public void I_click_the_button(String name) {
		driver.findElement(By.name(name)).click();
	    
	}

	@Then("^I should see the logout link$")
	public void I_should_see_the_logout_link()  {
		boolean logout = driver.findElement(By.id("setupLink")).isDisplayed();
		Assert.assertTrue(logout);
	  
	}
	
	@Then("^I create an account$")
	public void I_create_an_account(DataTable accountDetials)  {
		List<Map<String, String>>  accountData = accountDetials.asMaps(null, null);
		for(Map<String, String> data : accountData ) {
			driver.findElement(By.linkText("Accounts")).click();
			driver.findElement(By.name("new")).click();
			driver.findElement(By.id("acc2")).sendKeys(data.get("Account Name"));
			driver.findElement(By.id("acc5")).sendKeys(data.get("Account Number"));
			driver.findElement(By.id("acc23")).sendKeys(data.get("Account Site"));
			driver.findElement(By.name("save")).click();
		}
		
		
	   
	}
	
	@When("^I click the \"([^\"]*)\" buttonn$")
	public void I_click_the_buttonn(String lead)  {
		driver.findElement(By.linkText(lead)).click();
	    
	}

	@Then("^I chick the \"([^\"]*)\" button$")
	public void I_chick_the_button(String name)  {
		driver.findElement(By.name(name)).click();
	  
	}

	@Then("^I enter \"([^\"]*)\" for \"([^\"]*)\" tab$")
	public void I_enter_for_tab(String id, String text)  {
		
		driver.findElement(By.id(text)).sendKeys(id);
	   
	}

	@Then("^I enter \"([^\"]*)\" for \"([^\"]*)\" button$")
	public void I_enter_for_button(String id, String text) {
		driver.findElement(By.id(text)).sendKeys(id);
	    
	}

	@Then("^I click \"([^\"]*)\" button$")
	public void I_click_button(String name)  {
		driver.findElement(By.name(name)).click();
	    
	}


}
