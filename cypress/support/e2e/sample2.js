describe("My First Test", () => {
  let HargaKendaraan = ["50000000", "45000000", "35000000"];
  let UangMuka = ["30", "45", "25"];
  let input = 1;

  const baseUrl = "https://bcafinance.co.id";

  it("Visit & Simulation BUdget on BCA Finance A", () => {
    cy.visit(baseUrl);
    cy.wait(3000);
    cy.get('.desktop-simulation--section > [href="/simulasi-kredit"] > span').click();
    cy.wait(3000);
    cy.get("#hargaKendaraan-Baru").type(HargaKendaraan[2]);
    cy.wait(1000);
    cy.get("#uangMukaRate-Baru").type(UangMuka[1]);
    cy.wait(1000);
    cy.get("#jenisAsuransi-Baru").select("Comprehensive").invoke("val").should("eq", "2005");
    cy.wait(1000);
    cy.get("#zonaWilayah-Baru").select("Sumatra dan Sekitarnya").invoke("val").should("eq", "3006");
    cy.wait(1000);
    cy.get("#btn-simulasiKreditMobilBaru").click();
    cy.wait(4000);
    cy.get("#nav-muka-body > div.row.style-mobile-disclaimer > div.is-desktop.row.ml-4.mr-4 > div.col-5 > div > div.is-desktop.action--wrapper > button.download-result").click();
  });

  it("Visit & Simulation BUdget on BCA Finance B", () => {
    cy.visit(baseUrl);
    cy.wait(3000);
    cy.get('.desktop-simulation--section > [href="/simulasi-kredit"] > span').click();
    cy.wait(3000);

    cy.get("#hargaKendaraan-Baru").then(($input) => {
      if (input == 3) {
        cy.get("#hargaKendaraan-Baru").type(HargaKendaraan[1]);
      } else {
        cy.get("#hargaKendaraan-Baru").type(HargaKendaraan[2]);
      }
    });
    cy.wait(1000);
    cy.get("#uangMukaRate-Baru").type(UangMuka[1]);
    cy.wait(1000);
    cy.get("#jenisAsuransi-Baru").select("Comprehensive").invoke("val").should("eq", "2005");
    cy.wait(1000);
    cy.get("#zonaWilayah-Baru").select("Sumatra dan Sekitarnya").invoke("val").should("eq", "3006");
    cy.wait(1000);
    cy.get("#btn-simulasiKreditMobilBaru").click();
    cy.wait(4000);
    cy.get("#nav-muka-body > div.row.style-mobile-disclaimer > div.is-desktop.row.ml-4.mr-4 > div.col-5 > div > div.is-desktop.action--wrapper > button.download-result").click();
  });
});
