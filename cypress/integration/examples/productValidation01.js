describe('Product validation', ()=>{

    it("Click on Capsicum Product", ()=>{

        // navigate to rahul shetty URL
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        // get the search boxs class locator and type "ca"
        cy.get('.search-keyword').type('ca')
        // waits for 2 seconds
        cy.wait(2000)

        /* When we use the code without "visible", it shows us error because
        there is 5 element and one of these is invisible. So, if we give
        ":visible", it will show the assertion if there is 4 visible element or not
        This assertion will pass as we have provied the ":visible".
        */
        cy.get('.product:visible').should('have.length', 4)

        /*get method give the area of a certain locations and find tries to find 
        something within this scope. eq select the 3rd index of "product" name 
        class then check if this particular selection contains 'ADD TO CART"
        and finally clicks on "ADD TO CART"
        */
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

    })


    it("Dynamically click on Cashewes", ()=>{
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ap')
    cy.get('.products').find('.product').each(($el, index, $list) =>{
       
       const apVegetablesList =  $el.find('h4.product-name').text()

            if (apVegetablesList.includes('Apple')){

                cy.wrap($el).find('button').click()
            }

        })

    })


})