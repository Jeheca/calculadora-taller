/**
 * Pruebas unitarias para calculator.js
 */

const { add, subtract, multiply, divide, modulo, power } = require('./src/calculator');

describe('Calculator Operations', () => {
  // Tests for add
  describe('add', () => {
    test('suma dos números positivos', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('suma números negativos', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('suma número positivo y negativo', () => {
      expect(add(10, -4)).toBe(6);
    });

    test('suma con cero', () => {
      expect(add(5, 0)).toBe(5);
    });

    test('lanza error con argumento no numérico', () => {
      expect(() => add('2', 3)).toThrow(TypeError);
      expect(() => add(2, null)).toThrow(TypeError);
    });
  });

  // Tests for subtract
  describe('subtract', () => {
    test('resta dos números positivos', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('resta números negativos', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });

    test('resta número positivo y negativo', () => {
      expect(add(10, -4)).toBe(6);
    });

    test('resta con cero', () => {
      expect(subtract(5, 0)).toBe(5);
    });

    test('lanza error con argumento no numérico', () => {
      expect(() => subtract('10', 4)).toThrow(TypeError);
      expect(() => subtract(10, undefined)).toThrow(TypeError);
    });
  });

  // Tests for multiply
  describe('multiply', () => {
    test('multiplica dos números positivos', () => {
      expect(multiply(4, 5)).toBe(20);
    });

    test('multiplica números negativos', () => {
      expect(multiply(-3, -4)).toBe(12);
    });

    test('multiplica positivo por negativo', () => {
      expect(multiply(6, -2)).toBe(-12);
    });

    test('multiplica por cero', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    test('multiplica con uno', () => {
      expect(multiply(7, 1)).toBe(7);
    });

    test('lanza error con argumento no numérico', () => {
      expect(() => multiply('4', 5)).toThrow(TypeError);
      expect(() => multiply(4, {})).toThrow(TypeError);
    });
  });

  // Tests for divide
  describe('divide', () => {
    test('divide dos números positivos', () => {
      expect(divide(20, 4)).toBe(5);
    });

    test('divide números negativos', () => {
      expect(divide(-20, -4)).toBe(5);
    });

    test('divide positivo por negativo', () => {
      expect(divide(-20, 4)).toBe(-5);
    });

    test('divide con uno', () => {
      expect(divide(15, 1)).toBe(15);
    });

    test('lanza error al dividir entre cero', () => {
      expect(() => divide(10, 0)).toThrow(Error);
    });

    test('lanza error con argumento no numérico', () => {
      expect(() => divide('20', 4)).toThrow(TypeError);
      expect(() => divide(20, [])).toThrow(TypeError);
    });
  });

  // Tests for modulo
  describe('modulo', () => {
    test('calcula módulo de división positiva', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('calcula módulo con divisor mayor', () => {
      expect(modulo(3, 5)).toBe(3);
    });

    test('calcula módulo con números negativos', () => {
      expect(modulo(-10, 3)).toBe(-1);
    });

    test('calcula módulo exacto', () => {
      expect(modulo(15, 5)).toBe(0);
    });

    test('lanza error al calcular módulo con divisor cero', () => {
      expect(() => modulo(10, 0)).toThrow(Error);
    });

    test('lanza error con argumento no numérico', () => {
      expect(() => modulo('10', 3)).toThrow(TypeError);
      expect(() => modulo(10, {})).toThrow(TypeError);
    });
  });

  // Tests for power
  describe('power', () => {
    test('calcula potencia positiva', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('calcula potencia con exponente cero', () => {
      expect(power(5, 0)).toBe(1);
    });

    test('calcula potencia con exponente uno', () => {
      expect(power(7, 1)).toBe(7);
    });

    test('calcula potencia con exponente negativo', () => {
      expect(power(2, -2)).toBe(0.25);
    });

    test('calcula potencia con base negativa', () => {
      expect(power(-2, 3)).toBe(-8);
    });

    test('calcula potencia con base cero', () => {
      expect(power(0, 5)).toBe(0);
    });

    test('lanza error con argumento no numérico', () => {
      expect(() => power('2', 3)).toThrow(TypeError);
      expect(() => power(2, null)).toThrow(TypeError);
    });
  });
});