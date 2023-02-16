import PageObject from "./../homePage/PageObject";

describe("Add Category", () => {
  const baseUrl = "kasirdemo.belajarqa.com";
  it("coba login page menggunakan page object models", () => {
    // Action Login
    PageObject.login();
    PageObject.categoriesnoninput();
    PageObject.categories();
  });
});
