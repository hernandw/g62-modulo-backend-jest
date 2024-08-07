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
});
