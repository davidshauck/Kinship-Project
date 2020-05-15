describe ('First Test', () => {
    it ('is working', () => {
      expect (true).to.equal (true);
    });
  });
  

  describe('My First Test', () => {
    it('clicks the link "type"', () => {
      cy.visit("http://localhost:3000/")

      cy.get(".navbar-nav").find('li')
    })
  })