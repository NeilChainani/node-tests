const request = require("supertest");
const expect = require("expect");
var app = require("./server").app;

describe("Server", () => {
  describe("get/", () => {
    it("should return hello world response", done => {
      request(app)
        .get("/")
        .expect(200)
        .expect(res => {
          expect(res.body).toInclude({ error: "page not found" }); //get a specific part of the body
        })
        .end(done);
    });
  });
  describe("get /users", () => {
    it("get my user", done => {
      request(app)
        .get("/users")
        .expect(200)
        .expect(res => {
          expect(res.body).toInclude({
            name: "Andrew",
            age: 25
          });
        })
        .end(done);
    });
  });
});
