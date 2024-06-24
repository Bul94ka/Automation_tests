//Test 1 (Homework)
describe("Our first test suite", () => {
    it("Test visits site LMS", () => {
        //cypress code
        cy.visit("https://www.edu.goit.global/account/login");

        //Find input with email address and paste email"
        cy.get("#user_email").type("user888@gmail.com");

        //Find password with password address and paste password"
        cy.get("#user_password").type("1234567890");

        //Click on a login button
        cy.get(".eckniwg2").click();

        //Verify that the login was successful by checking for a specific element that appears after login
        cy.get('#open-navigation-menu-mobile').should("be.visible");

        //Open the navigation menu
        cy.get('#open-navigation-menu-mobile').click();

        //Find the log out button in the menu and click it
        cy.get('[id="go-to-the-course-homepage-widget"]').scrollIntoView().should("be.visible");
        cy.get(':nth-child(12) > .next-bve2vl').click();
        
        //Verify that the user is redirected to the login page
        cy.url().should('include', '/account/login');
        
    });
});

//Test 2 (Homework)
describe("Our second test suite", () => {
    it("Test visits site LMS and logs in with new credentials", () => {

        cy.visit("https://www.edu.goit.global/account/login");
        //Find input with email address and paste email"
        cy.get("#user_email").type("testowyqa@qa.team");

        //Find password with password address and paste password"
        cy.get("#user_password").type("QA!automation-1");

        //Click on a login button
        cy.get(".eckniwg2").click();

        //Verify that the login was successful by checking for a specific element that appears after login
        cy.get('#open-navigation-menu-mobile').should("be.visible");

        //Open the navigation menu
        cy.get('#open-navigation-menu-mobile').click();

        //Find the log out button in the menu and click it
        cy.get('[id="go-to-the-course-homepage-widget"]').scrollIntoView().should("be.visible");
        cy.get(':nth-child(8) > .next-bve2vl').click();
        
        //Verify that the user is redirected to the login page
        cy.url().should('include', '/account/login');
    });
});


/*Second autotest for login user, admin, manager
describe("login test", () => {
    //Log in to admin account
    it("admin login", () => {
        cy. visit("https://www.edu.goit.global/account/login")

        cy.singIn("user888@gmail.com","1234567890");

    });

    //Log in to user account
    it("user login", () => {
        cy. visit("https://www.edu.goit.global/account/login");

        cy.singIn("nadia.tsmko.98@gmail.com", "Nadia_Tsomko78");

    });

    //Log in to manager account
    it("manager login", () => {
        cy. visit("https://www.edu.goit.global/account/login");

        cy.singIn("mrdusty@duniakeliling.com", "mrdusty@duniakeliling.com")

    });
});
*/

/*Third autotest for API
describe("httpbin tests", () => {
    const request = {
        url: 'https://httpbin.org/non-existing-url',
        failOnStatusCode : false
    };


    it("response code should be 200", () => {
        cy.request(request).then(response => {
            const status = response.status;

            assert.equal(200, status);
        })
    });

});
*/