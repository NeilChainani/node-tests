const expect = require("expect");
const utils = require("./utils");
it("should add two numbers", () => {
  var res = utils.add(33, 11);
  expect(res)
    .toBe(44)
    .toBeA("number");
});
it("should add two numbers async", done => {
  var res = utils.asyncAdd(33, 11, sum => {
    expect(sum)
      .toBe(44)
      .toBeA("number");
    done();
  });
});
it("should be square of a method", () => {
  var res = utils.square(4);
  expect(res)
    .toBe(16)
    .toBeA("number");
});
/*it("should be square of a method", done => {
  var res = utils.asyncSquare(4, sum => {
    expect(res)
      .toBe(16)
      .toBeA("number");
    done();
  });
});*/

it("very first and last names are set", () => {
  var user = {
    age: 45,
    location: "atlanta"
  };
  var res = utils.setName(user, "neil chainani");
  expect(res).toInclude({ firstName: "neil", lastName: "chainani" });
});

/*it("should be 12", () => {
  // expect(12).toNotBe(123);
  //expect({ name: "andrew" }).toEqual({ name: "andrew" });
  //expect([2, 3, 4]).toInclude(2);
  expect({
    name: "andrew",
    age: 25,
    location: "atlanta"
  }).toExclude({ age: 23 });
});*/
