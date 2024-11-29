/// <reference types="Cypress" />

Cypress.Commands.add("shop2", () => {
    cy.get(".btn.btn-info").each((element, index) => {
        cy.wrap(element).eq(index).click();
    })
});

Cypress.Commands.add("shop3", () => {
    cy.get(".btn.btn-info").then((element) => {
        for (var i=0; i<element.length; i++)
            cy.wrap(element).eq(i).click();
    })
});
