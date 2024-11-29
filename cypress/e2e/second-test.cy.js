    
import * as loginlocators from "../page-object-model/locators/login-page-loc.json"
import * as loginStr from "../page-object-model/data/loginStrings.json"
import { LOGIN_CREDENTIALS } from "../page-object-model/data/const"  
import { USER_DATA } from "../page-object-model/data/const"  

describe('Register', () => {
    
    beforeEach ("Login", ()=> {
      cy.visit(loginStr.urlpage)
      cy.login(LOGIN_CREDENTIALS.good.username, LOGIN_CREDENTIALS.good.password);
  
      cy.get('div.col-lg-3 > .my-4').should("have.text", "Shop Name").and("exist")
      cy.log("1")
    })

    it("Go to protractor page", ()=> {
      cy.get('.list-group > :nth-child(1)').click()
      cy.get('h1').should("have.text", "Protractor Tutorial").and("exist")
      cy.fillForm(USER_DATA.nombre, USER_DATA.email, USER_DATA.pass, USER_DATA.date);
      /*cy.get(':nth-child(1) > .form-control').type("Jose Gutierrez")
      cy.get(':nth-child(2) > .form-control').type("josegut@gmail.com")
      cy.get('#exampleInputPassword1').type("123456")
      cy.get('#exampleCheck1').click()
      cy.get('#inlineRadio1').click()
      cy.get(':nth-child(8) > .form-control').type("1995-11-13")
      cy.get('.btn').click() */

      cy.get(".alert").should("contain.text", "Success!").and("exist")
      
      cy.log("2")
    })  
  
    afterEach (()=> {
      //log is using to have an order in the actions
    cy.log("3")
    })
})