const { expect } = require("chai");
const Mtrx = require("mtrx");

describe("Mtrx basic operations", function () {

  let A, B;

  beforeEach(function () {
    A = new Mtrx([
      [1, 2],
      [3, 4]
    ]);

    B = new Mtrx([
      [5, 6],
      [7, 8]
    ]);
  });

  it("add matrices", function () {
    const R = A.add(B);
    expect(R).to.deep.equal([
      [6, 8],
      [10, 12]
    ]);
  });

  it("subtract matrices", function () {
    const R = A.sub(B);
    expect(R).to.deep.equal([
      [-4, -4],
      [-4, -4]
    ]);
  });

  it("multiply matrices", function () {
    const R = A.mul(B);
    expect(R).to.deep.equal([
      [19, 22],
      [43, 50]
    ]);
  });

  it("transpose matrix", function () {
    const R = A.T();
    expect(R).to.deep.equal([
      [1, 3],
      [2, 4]
    ]);
  });

});

