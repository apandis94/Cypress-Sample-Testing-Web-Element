const baseUrl = "kasirdemo.belajarqa.com";
let namadeskripsi = ["baju", "celana", "kaos"];
let keterangan = "Barang yang di input adalah barang yang sudah di cek";

class loginPage {
  elementsstep = {
    goback: () => cy.go("back"),

    verifyelementaddcategory: () => cy.get("#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > table"),
  };

  elementslogin = {
    visit: () => cy.visit(baseUrl),

    akun: () => cy.get("#root > div > div > div > div.css-104g6p0 > h2"),

    email: () => cy.get("#email"),

    password: () => cy.get("#password"),

    loginBtn: () => cy.get("#root > div > div > div > div.css-1w7v3tn > div > button"),

    profile: () => cy.get(":nth-child(1) > .chakra-stat > dl > .chakra-stat__label"),
  };

  elementscategory = {
    btnCategory: () => cy.get("#root > div > div > div.css-tnxwfz > div > a:nth-child(6)"),

    textCategories: () => cy.get("#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-tyo1sz > h2 > a:nth-child(2)"),

    btnTambah: () => cy.get("#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a"),

    textbaru: () => cy.get("#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-tyo1sz > h2"),

    inputnama: () => cy.get("#nama"),

    inputdeskripsi: () => cy.get("#deskripsi"),

    btnSimpan: () => cy.get("#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > button"),

    notifnoninput: () => cy.get("#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > div.chakra-alert.css-qwanz3"),
  };

  login() {
    this.elementslogin.visit().wait(3000).url().should("include", "/login");

    this.elementslogin.akun().contains("hai, kasirAja").wait(3000);

    this.elementslogin.email().type("kelontong.murah@gmail.com").wait(2000);

    this.elementslogin.password().type("SUKAJAYA10").wait(2000);

    this.elementslogin.loginBtn().contains("login").should("be.visible");

    this.elementslogin.loginBtn().click().wait(2000).url().should("eq", "http://kasirdemo.belajarqa.com/dashboard").wait(2000);

    this.elementslogin.profile().contains("Kelontong Murah").wait(2000);
  }

  categoriesnoninput() {
    this.elementscategory.btnCategory().contains("kategori").click().wait(3000).url().should("eq", "http://kasirdemo.belajarqa.com/categories");

    this.elementscategory.textCategories().contains("kategori");

    this.elementscategory.btnTambah().contains("tambah").click().wait(2000);

    this.elementscategory.textbaru().contains(" / baru");

    //this.elementscategory.inputnama().type(namadeskripsi[1]).wait(1000);

    //this.elementscategory.inputdeskripsi().type(keterangan).wait(1000);

    this.elementscategory.btnSimpan().contains("simpan").click().wait(2000);

    this.elementscategory.notifnoninput().contains('"name" is not allowed to be empty').wait(1000);

    this.elementsstep.goback().wait(2000);
  }

  categories() {
    this.elementscategory.btnCategory().contains("kategori").click().wait(3000).url().should("eq", "http://kasirdemo.belajarqa.com/categories");

    this.elementscategory.textCategories().contains("kategori");

    this.elementscategory.btnTambah().contains("tambah").click().wait(2000);

    this.elementscategory.textbaru().contains(" / baru");

    this.elementscategory.inputnama().type(namadeskripsi[1]).wait(1000);

    this.elementscategory.inputdeskripsi().type(keterangan).wait(1000);

    this.elementscategory.btnSimpan().contains("simpan").click().wait(2000);
  }

  verify() {
    this.elementsstep.verifyelementaddcategory().contains("celana").wait(2000);

    this.elementsstep.verifyelementaddcategory().contains("ABC").wait(2000);

    this.elementsstep.verifyelementaddcategory().contains("BCD").wait(2000);
  }
}

module.exports = new loginPage();
