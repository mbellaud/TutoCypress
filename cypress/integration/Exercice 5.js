describe('Exercice 5', function(){
   
    let userDetails

    beforeEach(function(){

        cy.fixture('Shopdemoqa_account').then(function(user) {
            userDetails = user
        })

    })

    it('Exercice 5', function(){

        cy.visit('https://shop.demoqa.com/my-account/')
     
                cy.get('#username').type(userDetails.username)
                cy.get('#password').type(userDetails.password)
                cy.get(':nth-child(3) > .woocommerce-button').click()

                                                //pour faire simulation de clavier il faut un "type('{}')"
                cy.get('.noo-search').click()
                cy.get('.form-control').type('shirt').type('{enter}')

                cy.contains('blue denim').click()   
                cy.get('#pa_color').select('Black')
                cy.get('#pa_size').select('34')
                cy.get('.single_add_to_cart_button').click()

                cy.get('.custom-logo-link > .custom-logo').click()

                cy.get('.post-1491 > .noo-product-inner > h3 > a').click()   
                cy.get('#pa_color').select('Grey')
                cy.get('#pa_size').select('40')
                cy.get('.single_add_to_cart_button').click()


                cy.get('.cart-name-and-total').click()

                cy.contains('blue denim')
                cy.contains('playboy')


    })


})