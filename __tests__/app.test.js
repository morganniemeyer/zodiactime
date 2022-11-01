const request = require('supertest');
const app = require('../lib/app');

const { zodiac } = require('../lib/zodiac-data.js');
console.log(zodiac);
describe('zodiac routes', () => {
  it('/zodiac should return a list of zodiac signs', async () => {
    const zList = await request(app).get('/zodiac');
    const expected = zodiac.map((z) => {
      return { name: z.name, dates: z.dates };
    });
    expect(zList.body).toEqual(expected);
  });
});
