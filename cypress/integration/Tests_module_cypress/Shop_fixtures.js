describe('Shopdemoqa_fixtures', function(){

    it('Account creation', function(){

        cy.visit('https://shop.demoqa.com/my-account')

        cy.fixture('Shopdemoqa_account').then(function(user) {

                cy.get('#reg_username').type(user.username)
                cy.get('#reg_email').type(user.email)
                cy.get('#reg_password').type(user.password)
           
        })

        cy.get('.woocommerce-Button').click()
//on mets le get de click submit ici car il y a un seul user dans les datas. S'il y avait plusieurs user, il faudrait que le click soit dans la boucle du fixture
    })


})