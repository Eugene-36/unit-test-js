const square = require('./square');

describe('square', () => {
  let mockValue;

  //Будет вызывать перед каждым тестом
  beforeEach(() => {
    mockValue = Math.random();
  });
  //Один раз переж всеми тестами
  beforeAll(() => {});
  test('Корректное значения', () => {
    // expect(square(2)).toBe(4);
    // expect(square(2)).toBeLessThan(5);
    // expect(square(2)).toBeGreaterThan(3);
    // expect(square(2)).not.toBeUndefined();
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(2);
    expect(spyMathPow).toBeCalledTimes(1);
  });

  test('Корректное значения', () => {
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(1);
    expect(spyMathPow).toBeCalledTimes(0);
  });
  //!Запускаются после тестов. Моки необходимо очищать
  afterEach(() => {
    jest.clearAllMocks();
  });
  // afterAll();
});
