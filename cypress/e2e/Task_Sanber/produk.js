import flowproduk from "../homePage/produk";
import PageLogin from "../homePage/Pagelogin";

describe("Add Produk", () => {
  cy.on("uncaught:exception", (err, runnable) => {
    // handle error
    return false;
  });

  cy.on("fail", (err, runnable) => {
    // handle error
    return false;
  });

  //login user
  it("login", () => {
    // call page object
    PageLogin.loginnonlogout();
  });

  //tambah category
  it("add produk", () => {
    // call page object
    flowproduk.addproduk();
  });

});
