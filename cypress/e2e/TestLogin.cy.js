import { Login } from "D:\Automation_tests\cypress\pages\Login.js";


const LoginPage = new Login();

describe("Page object example", () => {
  it("login page test", () => {
// visit page
    LoginPage.navigate();
// check title
    LoginPage.validateLoginTitle();
// check inputs
    LoginPage.validateInputs();
// check button
    LoginPage.validateButton();
// check link
    LoginPage.validatePasswordLink();
  });
});
