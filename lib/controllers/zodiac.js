const { Router } = require('express');
const { zodiac } = require('../zodiac-data.js');

module.exports = Router()
  .get('/:id', (req, res) => {
    const match = zodiac.find((zodiac) => zodiac.id === req.params.id);

    return res.json(match);
  })
  .get('/', (req, res) => {
    const filtered = zodiac.map((z) => {
      return { sign: z.name, dates: z.dates };
    });
    res.json(filtered);
  });
