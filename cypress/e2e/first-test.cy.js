import * as loginlocators from "../page-object-model/locators/login-page-loc.json"
import * as loginStr from "../page-object-model/data/loginStrings.json"
//import * as consta from "../page-object-model/data/const"
import { LOGIN_CREDENTIALS } from "../page-object-model/data/const"

//Describe the test case
describe('Hindu Test login', () => {
  //Action to will execute before each proof
  beforeEach(()=> {
    cy.visit(loginStr.urlpage)
    cy.log("1")
  })
  
  //Init a proof
  it('Basic wrong login', () => {
    
    cy.login(LOGIN_CREDENTIALS.bad.username, LOGIN_CREDENTIALS.bad.password);
    /*//type is using when the user will put text on a field
    cy.get(loginlocators.usernameInp).type("santos")
    cy.get(loginlocators.passInp).type("holamundo")
    //click is using on buttons or something
    cy.get(loginlocators.signBtn).click()*/

    //Asset, is using to confirm if what is happening it's true or not, like verify 
    //cy.get(loginlocators.alert).should("have.text", loginStr.badmessage).and("exist")
    cy.log("2")
  })

  it("Basic login", ()=> {
    cy.login(LOGIN_CREDENTIALS.good.username, LOGIN_CREDENTIALS.good.password);

    cy.get(loginlocators.shopTxt).should("have.text", "Shop Name").and("exist")
    cy.log("3")
  })

  afterEach (()=> {
    //log is using to have an order in the actions
    cy.log("4")
  })
})