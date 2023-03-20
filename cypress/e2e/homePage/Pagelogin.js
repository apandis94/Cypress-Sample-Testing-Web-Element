const baseUrl = "kasirdemo.belajarqa.com";

let email = "kelontong.murah@gmail.com";
let pass = "SUKAJAYA10";
let nonemail = '"email" is not allowed to be empty';
let nonpasss = '"password" is not allowed to be empty';

class loginPage {
  elementsstep = {
    goback: () => cy.go("back"),
  };

  elementslogin = {
    visit: () => cy.visit(baseUrl),

    email: () => cy.get("#email"),

    password: () => cy.get("#password"),

    loginBtn: () => cy.get("#root > div > div > div > div.css-1w7v3tn > div > button"),

    profile: () => cy.get(":nth-child(1) > .chakra-stat > dl > .chakra-stat__label"),

    notifnoninputemail: () => cy.get("#root > div > div > div > div.css-1w7v3tn > div > div.chakra-alert.css-qwanz3"),

    elementverifyopenweb: () => cy.get("#root > div > div > div > div.css-104g6p0 > h2"),
  };

  loginnoninputemail() {
    this.elementslogin.visit().wait(3000).url().should("include", "/login");

    this.elementslogin.elementverifyopenweb().contains("hai, kasirAja").wait(3000);

    //this.elementslogin.email().type("kelontong.murah@gmail.com").wait(2000);

    this.elementslogin.password().type(pass).wait(2000);

    this.elementslogin.loginBtn().contains("login").should("be.visible");

    this.elementslogin.loginBtn().click().wait(2000);

    this.elementslogin.notifnoninputemail().contains(nonemail).should("have.class", "chakra-alert css-qwanz3");

    //this.elementslogin.profile().contains("Kelontong Murah").wait(2000);
  }

  loginnoninputpass() {
    this.elementslogin.visit().wait(3000).url().should("include", "/login");

    this.elementslogin.elementverifyopenweb().contains("hai, kasirAja").wait(3000);

    this.elementslogin.email().type(email).wait(2000);

    //this.elementslogin.password().type(pass).wait(2000);

    this.elementslogin.loginBtn().contains("login").should("be.visible");

    this.elementslogin.loginBtn().click().wait(2000);

    this.elementslogin.notifnoninputemail().contains(nonpasss).should("have.class", "chakra-alert css-qwanz3");

    //this.elementslogin.profile().contains("Kelontong Murah").wait(2000);
  }

  login() {
    this.elementslogin.visit().wait(3000).url().should("include", "/login");

    this.elementslogin.elementverifyopenweb().contains("hai, kasirAja").wait(3000);

    this.elementslogin.email().type("kelontong.murah@gmail.com").wait(2000);

    this.elementslogin.password().type("SUKAJAYA10").wait(2000);

    this.elementslogin.loginBtn().contains("login").should("be.visible");

    this.elementslogin.loginBtn().click().wait(2000).url().should("eq", "http://kasirdemo.belajarqa.com/dashboard").wait(2000);

    this.elementslogin.profile().contains("Kelontong Murah").wait(2000);
  }
}

module.exports = new loginPage();
