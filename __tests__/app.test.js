const request = require('supertest');
const app = require('../lib/app');

const { zodiac } = require('../lib/zodiac-data.js');

describe('zodiac routes', () => {
  it('/zodiac should return a list of zodiac signs', async () => {
    const zList = await request(app).get('/zodiac');
    const expected = zodiac.map((zodiac) => {
      return { name: zodiac.name, dates: zodiac.dates };
    });
    expect(zList.body).toEqual(expected);
  });
});
