describe('Add To Products and Checkout',async()=>{

    it('Verify User Able to Add The Products and Make Sure Products to Checkout',async()=>{
    

        cy.visit('/')
        cy.get('div.login_logo').should('be.visible').and('contain.text','Swag Labs')
        cy.get('input[data-test="username"]').should('be.enabled').type('standard_user')
        cy.get('input[data-test="password"]').should('be.enabled').type('secret_sauce')
        cy.get('input[data-test="login-button"]').click()
        cy.get('[data-test="secondary-header"] span[data-test="title"]').should('be.visible').and('contain.text','Products')

        cy.get('[id="add-to-cart-sauce-labs-backpack"]').first().click()
        cy.get('[id="shopping_cart_container"]').click()
        cy.get('[data-test="inventory-item-name"]').should('be.visible').and('contain.text','Sauce Labs Backpack')
        cy.get('[data-test="checkout"]').click()
        cy.get('span[data-test="title"]').should('contain.text','Checkout: Your Information')
        cy.get('input[data-test="firstName"]').type('Hellow')
        cy.get('[data-test="lastName"]').type('Password')
        cy.get('[data-test="postalCode"]').type('000000')
        cy.get('[data-test="continue"]').should('be.enabled').click()
        cy.get('span[data-test="title"]').should('contain.text','Checkout: Overview')
        cy.get('[data-test="inventory-item-name"]').should('be.visible').and('contain.text','Sauce Labs Backpack')
        cy.get('[data-test="finish"]').should('be.enabled').click()
        cy.get('[data-test="complete-header"]').should('contain.text','Thank you for your order!000')
        cy.get('[data-test="back-to-products"]').should('be.visible')
 
})

    it('Verify the lockout User Validation',async()=>{
    

        cy.visit('/')
        cy.get('div.login_logo').should('be.visible').and('contain.text','Swag Labs')
        cy.get('input[data-test="username"]').should('be.enabled').type('locked_out_user')
        cy.get('input[data-test="password"]').should('be.enabled').type('secret_sauce')
        cy.get('input[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('be.visible').and('contain.text','Epic sadface: Sorry, this user has been locked out.')
        
})
})