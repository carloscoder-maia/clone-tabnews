//test("Deve somar dois números", function () {
//  console.log("Iniciando teste de soma");
//});

//test("testando outra função", () => {
//  console.log("Iniciando teste de outra função");
//});

//test("espero que 1 seja 1", () => {
//  expect(1).toBe(1);
//});

const calculadora = require("../models/calculadora");

test("somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 'banana' + 100 deveria retornar 105", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe(105);
});
