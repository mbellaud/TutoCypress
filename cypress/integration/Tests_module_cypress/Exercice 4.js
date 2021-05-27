describe('Exercice 4', function(){

    before(function(){
        cy.fixture('Exercice4').as('user') 
    })

    it('Remplir un formulaire', function(){
        
        cy.visit('https://demoqa.com/automation-practice-form')

        const filepath = 'images/myPhotography.png'

        
        cy.get('#firstName').type(this.user.firstname)
        cy.get('#lastName').type(this.user.lastname)
        cy.get('#userEmail').type(this.user.email)
        cy.get('#userNumber').type(this.user.mobile)
        cy.get('#subjectsContainer').type(this.user.subjects)
        cy.get('#currentAddress').type(this.user.adress)

        cy.get('#genterWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').click()
        

        cy.get('#uploadPicture').attachFile(filepath)

        cy.get('#dateOfBirthInput').click()
        cy.get('.react-datepicker__month-select').select('October')
        cy.get('.react-datepicker__year-select').select('1988')
        cy.get(':nth-child(5) > .react-datepicker__day--026').click()
        
        cy.get('#submit').click()

//contrôle pour avoir à la fois le nom et le prénom à côté, il faut mettre les ".should" en dessous pour les accumuler et en plus pas de "have.value" 
//car là on veut vérifier que le prénom et le nom sont présent donc "contain" en argument
        cy.get('tbody > :nth-child(1) > :nth-child(2)')
        .should('contain', this.user.lastname)
        .should('contain', this.user.firstname)
        cy.get("tr:nth-child(5) td:nth-child(2)").should('have.text', '26 October,1988')
//ici le "have.text" est en valeur absolue donc on vérifie l'intégralité des caractères de la colonne
    
    })

})