export type Product = {
  id: number;
  name: string;
  minCoverage: number;
  maxCoverage: number;
  risk: number;
};

export const calcPrice = (coverage: number, risk: number): number =>
  coverage * risk;
