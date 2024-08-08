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
    cy.visit("http://localhost:3003");
    cy.get(".row__posters").eq(0);
    cy.get(".row__posters ").eq(3).find(".row__poster").first().as("poster");
    cy.get("@poster")
      .click()
      .then(function () {
        cy.find("have.class", "html5-video-player");
      });
    // cy.get(".row__posters > .row__poster")
    //   .first()
    //   .click()
    //   .then(function () {
    //     cy.find("youtube_video");
    //   });
  });
});
