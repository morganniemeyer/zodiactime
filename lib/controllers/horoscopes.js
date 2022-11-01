const { Router } = require('express');
const { horoscopes } = require('../horoscopes');

module.exports = Router().get('/:name', (req, res) => {
  const match = horoscopes.find(
    (horoscope) => horoscope.name === req.params.name
  );

  return res.json(match);
});
