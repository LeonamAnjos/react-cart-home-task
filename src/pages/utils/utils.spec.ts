import { totalValue, firstLetter } from "./utils";

describe("firstLetter()", () => {
  [
    {
      input: "Test",
      expected: "T",
    },
    {
      input: "Another test",
      expected: "A",
    },
    {
      input: "lowercase",
      expected: "L",
    },
    {
      input: "",
      expected: "",
    },
    {
      input: "        ",
      expected: "",
    },
  ].forEach(({ input, expected }) => {
    it(`WHEN '${input}'`, () => {
      expect(firstLetter(input)).toBe(expected);
    });
  });
});

describe("totalValue()", () => {
  [
    {
      input: [],
      expected: 0.0,
    },
    {
      input: [
        {
          price: 10.5,
        },
      ],
      expected: 10.5,
    },
    {
      input: [
        {
          price: 10.5,
        },
        {
          price: 20.5,
        },
      ],
      expected: 31.0,
    },
  ].forEach(({ input, expected }, index) => {
    it(`WHEN test case #'${index}'`, () => {
      expect(totalValue(input)).toBe(expected);
    });
  });
});
