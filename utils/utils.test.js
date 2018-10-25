const expect = require("expect");
const utils = require("./utils");
it("should add two numbers", () => {
  var res = utils.add(33, 11);
  expect(res)
    .toBe(44)
    .toBeA("number");
});
it("should be square of a method", () => {
  var res = utils.square(4);
  expect(res)
    .toBe(16)
    .toBeA("number");
});

it("should be 12", () => {
  // expect(12).toNotBe(123);
  expect({ name: "andrew" }).toEqual({ name: "andrew" });
});
