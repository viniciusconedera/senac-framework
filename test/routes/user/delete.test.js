const { expect } = require("chai");
const request = require("supertest");
const server = require("../../../server");
const UserModel = require("../../../models/user");
const Database = require("../../utils/database");

describe("Delete User Route", () => {
  context("when I execute a delete to /user/:id with valid id", () => {
    const data = {
      name: "Vitor Alano",
      email: "alano.vitor@gmail.com",
      password: "12355789",
      avatar: "aaa.jpg",
      roles: ["normal"],
    };

    let id;

    before(async () => {
      const { insertedId } = await UserModel.insertOne(data);
      id = insertedId;
    });

    it("should return status 200", async () => {
      const response = await request(server).get(`/user/${id}`);
      expect(response.status).to.be.equals(200);
    });
  });
  context("when I execute a delete to /user/:id with invalid id", () => {
    let id;
    before(async () => {
      id = "5ee0e9b15b2b37362c428f65";
    });

    it("should return status 404", async () => {
      const response = await request(server).get(`/user/${id}`);
      expect(response.status).to.be.equals(404);
    });
  });
});
