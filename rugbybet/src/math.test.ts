import { fibonacci } from "./math";

describe("fibonacci", () => {
  it("returns 5 for n = 5", () => {
    const result = fibonacci(5);

    expect(result).toBe(5);
  });

  it("throws an error for a negative number", () => {
    const fn = () => fibonacci(-1);
    expect(fn).toThrow(Error);
  });
});
