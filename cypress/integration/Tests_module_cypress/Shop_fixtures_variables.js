describe('Shopdemoqa_fixtures', function(){
    // déclaration d'une variable ici pour qu'elle soit prise en compte dans tout le cas de test :
    let userDetails

    beforeEach(function(){

        cy.fixture('Shopdemoqa_account').then(function(user) {
            userDetails = user
// Lorsque l'on mets le fichie de jeu de data ici, cela veut dire que le fichier sera disponible pour tous les cas de tests suivant
        })

    })

    it('Account creation', function(){

        cy.visit('https://shop.demoqa.com/my-account')
     
                cy.get('#reg_username').type(userDetails.username)
                cy.get('#reg_email').type(userDetails.email)
                cy.get('#reg_password').type(userDetails.password)
                cy.get('.woocommerce-Button').click()

    })


})