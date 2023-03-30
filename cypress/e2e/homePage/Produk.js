require('cypress-xpath');

class flowproduk {

    elementproduk = {
        btnProduk: () => cy.get("#root > div > div > div.css-tnxwfz > div > a:nth-child(7) > div"),

        btntambah: () => cy.get("#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a"),

        Fieldnama: () => cy.get("#nama"),

        Fieldeksripsi: () => cy.get('#deskripsi'),

        Fielhargabeli: () => cy.xpath('//*[@id="harga beli"]'),

        Fielhargajual: () => cy.xpath('//*[@id="harga jual"]'),

        Fielstok: () => cy.get("#stok"),

        ButtonPilihkategori: () => cy.get("#kategori"),

        searchkategori: () => cy.get('.css-0 > .chakra-input__group > .chakra-input'),

        kategori: () => cy.xpath("//*[@class='css-u3dlpe' and contains(text(),'celana')][1]"),

        btnsave: () => cy.get('.chakra-button'),

        alert: () => cy.get('.chakra-alert')

      };

      addproduk() {
        this.elementproduk.btnProduk().click().wait(3000).url().should("eq", "http://kasirdemo.belajarqa.com/products");

        this.elementproduk.btntambah().click().wait(3000);

        this.elementproduk.Fieldnama().type("Zumba").wait(1000);

        this.elementproduk.Fieldeksripsi().type("Merk Dagang").wait(1000);

        this.elementproduk.Fielhargabeli().type("5000000").wait(1000);

        this.elementproduk.Fielhargajual().type("7500000").wait(1000);

        this.elementproduk.Fielstok().type("75").wait(1000);

        this.elementproduk.ButtonPilihkategori().click().wait(2000);

        this.elementproduk.searchkategori().type("celana").wait(1000);

        this.elementproduk.kategori().dblclick({ force: true }).wait(2000);

        this.elementproduk.btnsave().click().wait(3000);

        this.elementproduk.alert().contains("An internal server error occurred").wait(2000);


      }
}


module.exports = new flowproduk();