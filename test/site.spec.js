var app = require("../");
var request = require("supertest").agent(app.listen());

// Refer http://www.marcusoft.net/2015/10/eaddrinuse-when-watching-tests-with-mocha-and-supertest.html
// for EADDRINUSE error message
describe("Our amazing site", function () {
  it("has a nice welcoming message", function (done) {
    request
      .get("/")
      .expect("Koa says Hi!")
      .end(done)
  });
});
