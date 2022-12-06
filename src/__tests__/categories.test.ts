import request from "supertest";
import app from "../server";

describe("GET /categories", () => {
  test("should return all categories", async () => {
    const res = await request(app).get("/categories");

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

describe("GET /categories by id", () => {
  test("should return a category by id", async () => {
    const res = await request(app).get("/categories/1");

    expect(res.statusCode).toBe(200)
    expect(res.body).toStrictEqual({ id: 1, title: 'livre', color: '#F0EDEE' })
  })
})