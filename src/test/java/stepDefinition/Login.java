package stepDefinition;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Login {
	
	@Given("^I open the browser$")
	public void i_open_the_browser()  {
		Assert.assertTrue(false);
		System.out.println("i_open_the_browser");
	    
	}

	@Then("^I open the applicatoin$")
	public void i_open_the_applicatoin() {
		System.out.println("i_open_the_browser");

	}

	@Then("^I enter my username$")
	public void i_enter_my_username()  {
		System.out.println("i_open_the_browser");
	    
	}

	@Then("^I enter my password$")
	public void i_enter_my_password()  {
		System.out.println("i_open_the_browser");
	}

	@Then("^I login to application$")
	public void i_login_to_application() {
		System.out.println("i_open_the_browser");
	}

	@Then("^I see the logout buttion$")
	public void i_see_the_logout_buttion() {
		System.out.println("i_open_the_browser");
	}


}
