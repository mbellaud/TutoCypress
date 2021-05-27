describe('Exemple d_upload d_image via cypress', function(){

    before(function(){
        cy.visit('https://demoqa.com/upload-download')

    })

    it('Upload d_une photo et verification de l_upload', function(){
        const filepath = 'images/myPhotography.png'
        cy.get('#uploadFile').attachFile(filepath)
        cy.get('#uploadedFilePath').contains('myPhotography.png')


    })



})