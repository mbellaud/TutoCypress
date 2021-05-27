describe ('Actions on element', function(){

it('finds the element "type"', function(){

    cy.visit('https://example.cypress.io') 
    cy.contains('type').click() //cette commande .click peut aussi être mis à la ligne et en ajouter plusieurs à la suite

    //l'url doit contenir 'commands/actions' -> URL est comme un get mais il stock l'url pour ensuite vérifier qu'elle contient '/commands/actions'... --> vérifie que la nouvelle url contient...
    cy.url().should('include', '/commands/actions')


    //écrire une adresse mail dans le champ adresse mail
    cy.get('#email1').type('test@testmail.com')

    //vérirication que le champ est correctement saisit et on véririe la valeur du champ
    .should('have.value', 'test@testmail.com')
})




})
