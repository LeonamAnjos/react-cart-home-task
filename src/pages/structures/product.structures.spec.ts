import { calcPrice } from "./product.structures";

describe("calcPrice()", () => {
  [
    {
      input: {
        coverage: 200.0,
        risk: 0.1,
      },
      expected: 20.0,
    },
    {
      input: {
        coverage: 123.45,
        risk: 0.05,
      },
      expected: 6.1725,
    },
    {
      input: {
        coverage: 0.0,
        risk: 0.2,
      },
      expected: 0.0,
    },
    {
      input: {
        coverage: 1500.0,
        risk: 0.0,
      },
      expected: 0.0,
    },
    {
      input: {
        coverage: 0.0,
        risk: 0.0,
      },
      expected: 0.0,
    },
  ].forEach(({ input, expected }) => {
    const { coverage, risk } = input;
    it(`WHEN coverage: ${coverage} and risk: ${risk}`, () => {
      expect(calcPrice(coverage, risk)).toBe(expected);
    });
  });
});
