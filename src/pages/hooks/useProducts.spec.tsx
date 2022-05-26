import { renderHook } from "@testing-library/react-hooks";
import { rest } from "msw";
import { setupServer } from "msw/node";
import useProducts from "./useProducts";

const url = "../../config/products.json";

const server = setupServer(
  rest.get(url, (req, res, ctx) => {
    return res(
      ctx.json({
        data: {
          products: [
            {
              id: 1,
              name: "Bike",
              minCoverage: 0,
              maxCoverage: 3000,
              risk: 0.3,
            },
            {
              id: 2,
              name: "Jewelry",
              minCoverage: 500,
              maxCoverage: 10000,
              risk: 0.05,
            },
          ],
        },
        error: {},
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("useProducts", () => {
  it("SHOULD fetch", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useProducts({ url })
    );

    await waitForNextUpdate();

    expect(result).toMatchSnapshot();
  });
});
