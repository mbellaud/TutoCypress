describe ('Exercice 2', function(){

    it('Exercice2', function(){
        cy.visit('https://www.demoqua.com/books')
        cy.contains('Eric Elliot').click('Programming JavaScript Applications')
        cy.url().should('include', 'https://www.demoqa.com/books?book=9781491950296')
        

    })

}) 