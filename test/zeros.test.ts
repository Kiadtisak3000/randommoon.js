import { describe, test, expect } from "@jest/globals";
import { Variable } from "../lib/var";
import { Zeros } from "../zeros";

describe("Zeros Generate", () => {
  test("Generator Test", () => {
    expect(Zeros()).toEqual(new Variable([0, 0, 0, 0, 0], "int"));
    expect(Zeros([2, 2])).toEqual(
      new Variable(
        [
          [0, 0],
          [0, 0],
        ],
        "int"
      )
    );
  });
  test("Fail Test", () => {
    expect(Zeros([])).toEqual(new Variable([], "undefined"));
  });
});
