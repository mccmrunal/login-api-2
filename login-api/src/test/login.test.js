const app = require("../app");
const chai = require("chai");
const bcrypt = require("../utils/bcrypt");
const { expect } = chai;
const request = require("request");

describe("POST /login", () => {
  it("should return 401 if invalid username or password is provided", (done) => {
    request.post(
      {
        url: "http://localhost:3000/login",
        json: { username: "invalid", password: "invalid" },
      },
      (err, res, body) => {
        expect(res.statusCode).to.equal(401);
        expect(body.message).to.equal("Invalid username or password");
        done();
      }
    );
  });

  it("should return 422 if required fields are not provided", (done) => {
    request.post({ url: "http://localhost:3000/login", json: {} }, (err, res, body) => {
      expect(res.statusCode).to.equal(422);
      expect(body.errors[0].msg).to.equal("Username is required");
      expect(body.errors[1].msg).to.equal("Password is required");
      done();
    });
  });

  it("should return 200 if valid username and password is provided", (done) => {
    const hardcodedUsername = "user";
    const hardcodedPassword = "$2y$10$XH09OavHPpaNGEp71G1.WuuJcj9bK28O4GycFzu7Vx6vYUiVj8.xG";
    request.post(
      {
        url: "http://localhost:3000/login",
        json: { username: hardcodedUsername, password: "password" },
      },
      (err, res) => {
          expect(res.statusCode).to.equal(200);
          done();
        ;
      }
    );
  });
});
