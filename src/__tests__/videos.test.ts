import request from "supertest";
import app from "../server";

describe("GET /videos", () => {
  test("should return all videos", async () => {
    const res = await request(app).get("/videos");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

describe("GET /videos/:id", () => {
  test("should return a single video by id", async () => {
    const res = await request(app).get("/videos/1");

    expect(res.statusCode).toBe(200);
  })
})

describe("GET /videos/:id failure", () => {
  test("should fail when passing a non-existing id trying to get a video", async () => {
    const res = await request(app).get("/videos/99999");

    expect(res.statusCode).toBe(404);
  })
})

describe("POST /videos", () => {
  test("should create a new video in db", async () => {
    const res = await request(app).post("/videos").send({
      "title": "2NA",
      "description": "Lofff",
      "url": "https://www.youtube.com/watch?v=MDmYr6M39a0&ab_channel=TravisL"
    });
    expect(res.statusCode).toBe(201);
  })
})

describe("DELETE /videos/:id", () => {
  test("should delete a video by id", async () => {
    const res = await request(app).delete("/videos/6")

    expect(res.statusCode).toBe(200)
  })
})