/*First autotest Test

describe("Our first test suite", () => {
    it("Test visits site LMS", () => {
        //cypress code
        cy.visit("https://www.edu.goit.global/account/login");

        /*TEST CASES 1

        //Find input with email address and paste email"
        cy.get("#user_email").type("user888@gamil.com");

        //Find password with password address and paste password"
        cy.get("#user_password").type("1234567890");

        //Click on a login button
        cy.get(".eckniwg2").click();
        cy.get(".eckniwg2").should('have.class',"active");
        
        
        TESTS CASES 2 

        //Find input with email address and paste email"
        cy.get("#user_email").type("user888@gmail.com");

        //Find password with password address and paste password"
        cy.get("#user_password").type("1234567890");

        //Click on a login button
        cy.get("[type= 'submit']").click();

        //Scroll into view
        cy.get('[id="go-to-the-course-homepage-widget"]').scrollIntoView().should("be.visible");
        
    });
});
*/

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

//Third autotest for API
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