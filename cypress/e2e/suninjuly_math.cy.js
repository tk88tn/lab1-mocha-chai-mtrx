describe("SunInJuly math task", () => {

  function calc(x) {
    return String(Math.log(Math.abs(12 * Math.sin(Number(x)))));
  }

  it("solves math form", () => {
    cy.visit("http://suninjuly.github.io/math.html");

    cy.get("#input_value")
      .invoke("text")
      .then((x) => {
        cy.get("#answer").type(calc(x));
        cy.get("#robotCheckbox").check();
        cy.get("#robotsRule").check();
        cy.get("button[type='submit']").click();
      });

    cy.contains("Congratulations").should("exist");
  });
});
