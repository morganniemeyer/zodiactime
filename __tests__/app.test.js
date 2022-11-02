const request = require('supertest');
const app = require('../lib/app');

const { zodiac } = require('../lib/zodiac-data');
describe('zodiac routes', () => {
  it('/zodiac should return a list of zodiac signs', async () => {
    const zList = await request(app).get('/zodiac');
    const expected = zodiac.map((z) => {
      return { sign: z.name, dates: z.dates };
    });
    expect(zList.body).toEqual(expected);
  });

  it('/zodiac/:id should return sign detail', async () => {
    const response = await request(app).get('/zodiac/1');
    const aquarius = {
      id: '1',
      name: 'aquarius',
      dates: 'Jan 21 - Feb 19',
      symbol: 'Water Bearer',
    };
    expect(response.body).toEqual(aquarius);
  });

  it('/horoscopes/:name should return horoscope and sign detail', async () => {
    const response = await request(app).get('/horoscopes/aries');
    const aries = {
      id: '2',
      name: 'aries',
      dates: 'Mar 21 - Apr 19',
      symbol: 'Ram',
      horoscope: 'Adjust to the new vibe',
    };
    expect(response.body).toEqual(aries);
  });
});
