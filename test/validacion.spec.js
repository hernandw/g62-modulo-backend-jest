import request from "supertest";
import app from "../index.js";

const sum = (a, b) => {
  return a + b;
};

describe("validar una operacion matematica", () => {
  it("debe sumar 2 + 2", () => {
    const number1 = 10;
    const number2 = 10;
    const resultado = sum(number1, number2);
    expect(resultado).toBe(20);
  });

  test("validar que retorne productos a traves de get", async () => {
    const response = await request(app).get("/products").send();
    expect(response.statusCode).toBe(200);
  });
});
