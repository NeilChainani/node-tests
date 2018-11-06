const expect = require("expect");
const rewire = require("rewire");

var app = rewire("./app");
describe("app", () => {
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__("db", db);
  it("it should call spies correct", () => {
    var spy = expect.createSpy();
    spy("andrew", 25);
    expect(spy).toHaveBeenCalled("andrew", 25);
  });

  it("should call save user object", () => {
    var email = "neil@live.com";
    var password = "lol";
    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({ email, password });
  });
});
