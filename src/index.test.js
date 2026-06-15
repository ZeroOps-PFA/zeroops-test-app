const request = require("supertest");
const app = require("./index");

describe("ZeroOps Test App", () => {
  test("GET / retourne le message de bienvenue", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toContain("ZeroOps");
  });

  test("GET /health retourne status healthy", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("healthy");
  });

  test("GET /info retourne les infos Node", async () => {
    const res = await request(app).get("/info");
    expect(res.statusCode).toBe(200);
    expect(res.body.node).toBeDefined();
  });
});