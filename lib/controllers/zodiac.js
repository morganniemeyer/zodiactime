const { Router } = require('express');
const { zodiac } = require('../zodiac-data.js');

module.exports = Router().get('/', (req, res) => {
  const filtered = zodiac.map((z) => {
    return { sign: z.name, dates: z.dates };
  });
  res.json(filtered);
});
