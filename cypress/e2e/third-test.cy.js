
import * as loginlocators from "../page-object-model/locators/login-page-loc.json"
import * as loginStr from "../page-object-model/data/loginStrings.json"
import { LOGIN_CREDENTIALS } from "../page-object-model/data/const"
import { COUNTRY } from "../page-object-model/data/const"

describe('Shopping a cellphone', () => {
   
    beforeEach ("Login", ()=> {
      cy.visit(loginStr.urlpage)
      cy.login(LOGIN_CREDENTIALS.good.username, LOGIN_CREDENTIALS.good.password);
  
      cy.get(loginlocators.shopTxt).should("have.text", "Shop Name").and("exist")
      cy.log("1")
    })

    it("Add products", ()=> {
        //cy.shop()
        //cy.get(".app-card:nth-child(1) button").click()
        //cy.get(".col-lg-3:nth-child(2) .btn").click()
        cy.shop3()

        cy.get(loginlocators.checkOut).should("contain.text", "Checkout ( 4 )").and("exist").click()

        cy.get("tr:nth-child(2) .btn").click()
        cy.get(".btn-success").click()
        cy.country(COUNTRY.country);
        //cy.get("#country").type("Mexico")
        cy.get(".btn-success.btn-lg").click()
        cy.get(".alert.alert-dismissible").should("contain.text", "Success!").and("exist")
        cy.log("2")
      })
  
    afterEach (()=> {
      cy.log("3")
    })
  })