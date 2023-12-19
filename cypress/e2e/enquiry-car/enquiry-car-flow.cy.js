/// <reference types="cypress" />

describe('Validate the negative path of enquiring the highest price at Mercedes-Benz', () => {
  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it('Opens demo website and agrees to cookies', { includeShadowDom: true }, () => {
    cy.visit('https://shop.mercedes-benz.com/en-au/shop/vehicle/srp/demo');
    cy.wait(5000);

    cy.get('cmm-cookie-banner[settings-id="Kvbnw4-6_"]')
      .shadow()
      .find('.button-group [data-test="handle-accept-all-button"]')
      .eq(1)
      .click({ force: true });
  });

  it('Filter cars and request to speak to an expert', () => {
    cy.visit('https://shop.mercedes-benz.com/en-au/shop/vehicle/srp/demo');
    cy.wait(5000);

    // Choose country
    cy.get('.dcp-header-location-modal-dropdown')
      .find('select')
      .select('New South Wales');

    // Enter zip code
    cy.get('wb-input-control').type('2007');
    cy.get('body').click(0,0);
    cy.wait(5000);

    // Confirm visibility of input
    cy.get('input').should('be.visible');

    // Submit form
    cy.get('.wb-margin-bottom-xs').eq(0).click();
    cy.get('button[data-test-id="state-selected-modal__close"]').click();

    // Sort by highest price
    cy.get('.dcp-cars-srp__sorting-dropdown')
      .find('select')
      .select('Price (descending)');
    cy.wait(5000);

    // Click on the first result
    cy.get('.dcp-cars-srp-results__tile:nth-child(1)').click();

    // Click on Speak to an expert
    cy.get('[data-test-id="dcp-buy-box__contact-seller"]').click();

    // Fill in contact form
    cy.get('[data-test-id="rfq-contact__first-name"]').type('Hello MB team');
    cy.get('[data-test-id="rfq-contact__last-name"]').type('Merry Christmas to you');
    cy.get('[data-test-id="rfq-contact__email"]').type('fakemail');
    cy.get('[data-test-id="rfq-contact__phone"]').type('0441234567');
    cy.get('[data-test-id="rfq-contact__email"]').scrollIntoView()
    cy.get('[data-test-id="rfq-contact__email"]').contains('Please enter a valid email address using a minimum of six characters.')
    cy.get('[data-test-id="rfq-contact__email"]').type('fake@email.com');
    cy.get('[data-test-id="rfq-contact__postal-code"]').type('2007');
    cy.get('[data-test-id="rfq-contact__comments"]').type('That was a fun challenge');

    // Select radio option
    cy.get('.dcp-radio__options').eq(1).click();

    // Check Privacy
    cy.get('[data-test-id="rfq-contact__consent-privacy"]')
    .find('input[type="checkbox"]').scrollIntoView()
    .check({ force:true })

    // Marketing checkbox check
     cy.get('.dcp-multi-checkbox__options').contains('Phone').click();

     //Submit form
     cy.get('[data-test-id="dcp-rfq-contact-button-container__button-next"]').click()
  
     //Verify form was submitted successfully
     cy.get('.dcp-rfq-container-modal-content')
     .should('contain', 'Your request has been successfully submitted.')
  });

});
