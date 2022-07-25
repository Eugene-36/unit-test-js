const mapArrToStrings = require('./mapArrToStrings');

describe('mapArrToStrings', () => {
  test('Корректное значения', () => {
    expect(mapArrToStrings([1, 2, 3, 4, 5, 6, 7])).toEqual([
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
    ]);
  });

  test('Мешанина', () => {
    expect(
      mapArrToStrings([1, 2, 3, 4, 5, 6, 7, null, undefined, 'sdadasd'])
    ).toEqual(['1', '2', '3', '4', '5', '6', '7']);
  });

  test('Пустой массив', () => {
    expect(mapArrToStrings([])).toEqual([]);
  });

  test('Отрицание', () => {
    expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
  });
});
