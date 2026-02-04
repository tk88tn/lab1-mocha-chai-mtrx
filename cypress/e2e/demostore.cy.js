describe("DemoStore website testing", () => {
  const baseUrl = "https://demostore.website/index.php";

  const ts = Date.now();
  const user = {
    firstName: "Test",
    lastName: "User",
    email: `testuser_${ts}@example.com`,
    password: "TestPassword123!"
  };

  it("Navigates through main pages", () => {
    cy.visit(baseUrl);

    cy.contains("Popular Products").should("exist");

    cy.get("a").contains(/Clothes|Accessories|Art/i).first().click({ force: true });
    cy.url().should("include", "index.php");

    cy.get("a").contains(/Contact/i).click({ force: true });
    cy.contains(/Contact us/i).should("exist");

    cy.get("a").contains(/Sign in|Log in/i).click({ force: true });
    cy.contains(/Sign in|Log in|Create an account/i).should("exist");
  });

  it("Registers a new user", () => {
    cy.visit(baseUrl);
    cy.get("a").contains(/Sign in|Log in/i).click({ force: true });

    cy.contains(/Create one here|No account|Create an account/i)
      .click({ force: true });

    cy.get("input[name='firstname'], #field-firstname")
      .first()
      .type(user.firstName);
    cy.get("input[name='lastname'], #field-lastname")
      .first()
      .type(user.lastName);
    cy.get("input[name='email'], #field-email")
      .first()
      .type(user.email);
    cy.get("input[name='password'], #field-password")
      .first()
      .type(user.password);

    cy.get("input[type='checkbox']").then(($c) => {
      if ($c.length) cy.wrap($c.first()).check({ force: true });
    });

    cy.get("button[type='submit']").first().click({ force: true });

    cy.contains(/Sign out|My account/i, { timeout: 10000 })
      .should("exist");
  });

  it("Adds product to cart (custom functionality)", () => {
    cy.visit(baseUrl);

    cy.get("a").contains(/Clothes|Accessories|Art/i)
      .first()
      .click({ force: true });

    cy.get("article.product-miniature a.product-thumbnail")
      .first()
      .click({ force: true });

    cy.contains("button", /Add to cart/i)
      .click({ force: true });

    cy.contains(/added to your cart|Shopping Cart/i, { timeout: 10000 })
      .should("exist");
  });
});
