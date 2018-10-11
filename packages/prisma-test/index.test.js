const log = jest.fn();
console.log = log;
const prismaTest = require('./');
test('outputs correct string', () => {
  expect(log.mock.calls.length).toBe(2);
  expect(log.mock.calls[0][0]).toBe('Pretting greetings: ');
  expect(log.mock.calls[1][0]).toBe('apple and juice');
});