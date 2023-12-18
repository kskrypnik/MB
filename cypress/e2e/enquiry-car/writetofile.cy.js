/// <reference types="cypress" />

function acceptCookies() {
    cy.get('cmm-cookie-banner[settings-id="Kvbnw4-6_"]')
      .shadow()
      .find('.button-group [data-test="handle-accept-all-button"]')
      .eq(1)
      .click({ force: true });
  }
  
  function chooseCountryAndZip(country, zip) {
    cy.get('.dcp-header-location-modal-dropdown')
      .find('select')
      .select(country)
      .should('have.value', country);
  
    cy.get('wb-input').type(zip);
  
    //cy.get('.wb-margin-bottom-xs').eq(0).click();
  
    //cy.get('button[data-test-id="state-selected-modal__close"]').click();
  }
  
  describe('hopeful families list', () => {
    afterEach(() => {
      cy.saveLocalStorage();
    });
  
    beforeEach(() => {
      cy.restoreLocalStorage();
    });
  
    it('open website and agree to cookies', { includeShadowDom: true }, () => {
      cy.visit('https://shop.mercedes-benz.com/en-au/shop/vehicle/srp/demo');
      cy.wait(5000);
      acceptCookies();
    });
  
    it('choose country and zip', () => {
      cy.visit('https://shop.mercedes-benz.com/en-au/shop/vehicle/srp/demo');
      cy.wait(5000);
      acceptCookies();
  
      chooseCountryAndZip('New South Wales', '2007');
      cy.get('.wb-margin-bottom-xs').eq(0).click();
      cy.wait(5000);
  
     cy.get('button[data-test-id="state-selected-modal__close"]').click();

  
      cy.get('.dcp-cars-srp-results__tile').eq(1).click();
      // Add additional test steps as needed
    });
  });
  