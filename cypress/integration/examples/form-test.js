describe("My First Test", function () {
  //act
  it("Does not do much", function () {
    //assert
    expect(true).to.equal(true);
  });
});
describe("Input Navigation", function () {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });
  const nameInput = () => cy.get("input[name=name]");
  const checkbox = () => cy.get("input[type=checkbox]");
  // const submitBtn = () => cy.get(".btn");

  it("nameInput works", function () {
    nameInput()
      .should("exist")
      .type("John Smith")
      .should("have.value", "John Smith");
  });
  it("checkbox works", function () {
    checkbox().should("exist").check().should("be.checked");
  });
});
