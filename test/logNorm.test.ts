import { Variable } from "../lib/var";
import { describe, test, expect } from "@jest/globals";
import { randLogNorm_dist } from "../logNorm";
describe("test Log-Normal distribution function", () => {
  test("generate test", () => {
    const mean = 1;
    const std = 2;
    const lognorm = randLogNorm_dist(mean, std);
    expect(lognorm.IsNum).toEqual(true);
  });
});
