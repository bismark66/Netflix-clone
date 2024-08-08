/** @format */

// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

// describe("My First Test", () => {
//   it("Does not do much!", () => {
//     expect(true).to.equal(true);
//   });
// });

// describe("My First Test", () => {
//   it("Does not do much!", () => {
//     expect(true).to.equal(false);
//   });
// });
describe("Spotify clone test", () => {
  it("Visits the spotify clone page", () => {
    cy.visit("http://localhost:3003/");
    cy.get(".row__posters > .row__poster").last().click();
  });
});
