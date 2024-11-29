import * as loginlocators from "../../page-object-model/locators/login-page-loc.json"

Cypress.Commands.add("login", (username, password) => {
    cy.get(loginlocators.usernameInp).type(username)
    cy.get(loginlocators.passInp).type(password)
    cy.get(loginlocators.signBtn).click()
})

Cypress.Commands.add("shop", () => {
    cy.get(".card-body").contains("iphone X").parents("app-card").find(".btn.btn-info").click()
    cy.get(".card-body").contains("Samsung Note 8").parents("app-card").find(".btn.btn-info").click()
    cy.get(".col-lg-3:nth-child(3) .btn").click()
    cy.get(".btn.btn-info").eq(3).click()
})


Cypress.Commands.add("country", (country) => {
    cy.get("#country").type(country)
})

Cypress.Commands.add("fillForm", (nombre, email, pass, date) => {
    cy.get(':nth-child(1) > .form-control').type(nombre)
    cy.get(':nth-child(2) > .form-control').type(email)
    cy.get('#exampleInputPassword1').type(pass)
    cy.get('#exampleCheck1').click()
    cy.get('#inlineRadio1').click()
    cy.get(':nth-child(8) > .form-control').type(date)
    cy.get('.btn').click()
})

