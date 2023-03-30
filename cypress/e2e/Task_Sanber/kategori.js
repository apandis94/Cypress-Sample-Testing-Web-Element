import PageObject from "../homePage/PageObject";
import PageLogin from "../homePage/Pagelogin";

describe("Add Category", () => {
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

  //negative test tambah categori non input nama
  it("negative test non input name on add categories", () => {
    // call page object
    PageObject.categoriesnoninput();
  });

  //tambah category
  it("add categories", () => {
    // call page object
    PageObject.categories();
  });

  //verify add category
  it("verify object on list categories", () => {
    // call page object
    PageObject.verify();
  });
});
