AQA Test Suite for Mercedes-Benz Website

This test suite is designed to validate the negative path of enquiring about the highest price at the Mercedes-Benz website. The tests cover scenarios such as opening the website, agreeing to cookies, filtering cars, and requesting to speak to an expert.
Prerequisites

Node.js installed
Cypress installed

Running the Tests

Clone the repository:

git clone https://github.com/kskrypnik/MB.git

Navigate to the project folder:

cd MB

Install dependencies:

npm install

Run the Cypress tests:

npx cypress open

Select the desired test file (enquiry-car-flow.cy.js) to execute the tests.
Test Descriptions
1. Opens demo website and agrees to cookies

Opens the Mercedes-Benz demo website
Accepts cookies to proceed

    Filter cars and request to speak to an expert

    Opens the Mercedes-Benz demo website Chooses the country and enters a zip code Submits the form and sorts cars by the highest price Clicks on the first result and opens the enquiry contact form Fills in the contact form and validates incorrect email Fills in correct data and submits the form Verifies that the form was submitted successfully

Notes

The tests use Cypress commands and assertions to validate the functionality of the Mercedes-Benz website.

