const showcase = require("./showcase.js");

describe("Showcase project methods should return data", () => {
  test("method getGroceryShowcase()", () => {
    var stream = showcase.getGroceryShowcase();
    expect(stream).not.toBe("");
  });
}
)
