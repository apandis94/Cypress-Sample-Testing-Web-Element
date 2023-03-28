import PageLogin from "../homePage/Pagelogin";
require('cypress-xpath');

describe("Login Simulation on ", () => {
  cy.on("uncaught:exception", (err, runnable) => {
    // handle error
    return false;
  });

  cy.on("fail", (err, runnable) => {
    // handle error
    return false;
  });

  //Login Kasir Demo non input email
  it("Visit & Simulation Login non input email", () => {
    PageLogin.loginnoninputemail();
  });

  //Login Kasir Demo non input email
  it("Visit & Simulation Login non input Pass", () => {
    PageLogin.loginnoninputemail();
  });

  // Login Berhasil ke web Kasir Demo
  it("Visit & Simulation Login Berhasil", () => {
    PageLogin.login();
  });
  
});
