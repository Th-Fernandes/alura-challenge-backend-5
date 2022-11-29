import request from "supertest";
import app from "../server";

describe("GET /videos", () => {
  test("should return all videos", async () => {
    const res = await request(app).get("/videos");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});