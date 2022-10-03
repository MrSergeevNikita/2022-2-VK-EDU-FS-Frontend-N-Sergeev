/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-4)).toBe(false)
  expect(convertBytesToHuman(-5934)).toBe(false)
  expect(convertBytesToHuman(false)).toBe(false)
  expect(convertBytesToHuman(null)).toBe(false)
  expect(convertBytesToHuman('string')).toBe(false)
  // ...
});

test('Возвращает корректное значение для чисел', () => {
 expect(convertBytesToHuman(22)).toBe('22 B')
 expect(convertBytesToHuman(1024)).toBe('1 KB')
 expect(convertBytesToHuman(1048576)).toBe('1 MB')
 expect(convertBytesToHuman(1073741824)).toBe('1 GB')
 expect(convertBytesToHuman(701153411072)).toBe('653 GB')
 expect(convertBytesToHuman(1099511627776)).toBe('1 TB')
  // ...
});

// другая группа проверок
