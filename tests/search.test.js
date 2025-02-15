import request from "supertest";
import app from "../src/app.js";

describe("Search API", () => {
  it("should return a list of pizza places", async () => {
    const res = await request(app).get("/api/search/pizza");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should return a list of juice places", async () => {
    const res = await request(app).get("/api/search/juice");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should return a list of combo places", async () => {
    const res = await request(app).get("/api/search/combo");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
