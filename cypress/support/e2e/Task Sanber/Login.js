import loginPage from "./../homePage/LoginObject";

describe("Login Simulation", () => {
  const baseUrl = "kasirdemo.belajarqa.com";

  let email = "kelontong.murah@gmail.com";
  let pass = "SUKAJAYA10";
  let nonemail = '"email" is not allowed to be empty';
  let nonpasss = '"password" is not allowed to be empty';

  it("Visit & Simulation Login non input email", () => {
    // Buka Web Kasir Demo dan verifikasi bahwa web sudah berhasil dibuka
    cy.visit(baseUrl).wait(3000).url().should("include", "/login");
    cy.get("#root > div > div > div > div.css-104g6p0 > h2").contains("hai, kasirAja");
    cy.wait(3000);

    // Input Password
    cy.get("#password").type(pass);
    cy.wait(1000);

    // Klik Button Login
    cy.get("#root > div > div > div > div.css-1w7v3tn > div > button").contains("login").click().wait(3000);

    // Verifikasi Notif / Alert bahwa login tidak berhasil dan menampilkan pesan pada element
    cy.get("#root > div > div > div > div.css-1w7v3tn > div > div.chakra-alert.css-qwanz3").contains(nonemail).should("have.class", "chakra-alert css-qwanz3");
  });

  it("Visit & Simulation Login non input Pass", () => {
    // Buka Web Kasir Demo dan verifikasi bahwa web sudah berhasil dibuka
    cy.visit(baseUrl).wait(3000).url().should("include", "/login");
    cy.get("#root > div > div > div > div.css-104g6p0 > h2").contains("hai, kasirAja");
    cy.wait(3000);

    // Input Email
    cy.get("#email").type(email);
    cy.wait(1000);

    // Klik Button Login
    cy.get("#root > div > div > div > div.css-1w7v3tn > div > button").contains("login").click().wait(3000);

    // Verifikasi Notif / Alert bahwa login tidak berhasil dan menampilkan pesan pada element
    cy.get("#root > div > div > div > div.css-1w7v3tn > div > div.chakra-alert.css-qwanz3").contains(nonpasss).should("have.class", "chakra-alert css-qwanz3");
  });

  it("Visit & Simulation Login Berhasil", () => {
    // Buka Web Kasir Demo dan verifikasi bahwa web sudah berhasil dibuka
    cy.visit(baseUrl).wait(3000).url().should("include", "/login");
    cy.get("#root > div > div > div > div.css-104g6p0 > h2").contains("hai, kasirAja");
    cy.wait(3000);

    // Input Email
    cy.get("#email").type(email);
    cy.wait(1000);

    // Input Password
    cy.get("#password").type(pass);
    cy.wait(1000);

    // Klik Button Login
    cy.get("#root > div > div > div > div.css-1w7v3tn > div > button").contains("login").should("be.visible").click().wait(3000).url().should("eq", "https://kasirdemo.belajarqa.com/dashboard");

    // Verifikasi Element bahwa berhasil login
    cy.get(":nth-child(1) > .chakra-stat > dl > .chakra-stat__label").contains("Kelontong Murah");

    // melakukan Scroll to element untuk memastikan bahwa dashboard sudah berhasil terbuka semua
    cy.get("#root > div > div > div.css-1r35f0l > div.css-11z2abi > a").scrollIntoView().should("have.text", "© 2023 kasirAja dev").should("have.attr", "href", "https://github.com/ajikamaludin/");
  });

  it("coba login page menggunakan page object models", () => {
    // Buka Web Kasir Demo dan verifikasi bahwa web sudah berhasil dibuka
    cy.visit(baseUrl).wait(3000).url().should("include", "/login");
    cy.get("#root > div > div > div > div.css-104g6p0 > h2").contains("hai, kasirAja");
    cy.wait(3000);

    // Verifikasi Element bahwa berhasil login
    loginPage.elements.loginBtn().contains("login").should("be.visible");

    // Action Login
    loginPage.login();
  });
});
