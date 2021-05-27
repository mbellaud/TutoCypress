describe('Shopdemoqa_fixtures', function(){
    

    beforeEach(function(){
//renommage du fichier de jeu de donnée 'shopdemoqa...' en "user" par l'alias ".as('xxx')": 
        cy.fixture('Shopdemoqa_account').as('user')

    })

    it('Account creation', function(){

        cy.visit('https://shop.demoqa.com/my-account')
     //le "this" remplace la fonction "fixture() .then(function())... du test précédent"
                cy.get('#reg_username').type(this.user.username)
                cy.get('#reg_email').type(this.user.email)
                cy.get('#reg_password').type(this.user.password)
                cy.get('.woocommerce-Button').click()
        
    })


})