const express = require('express');
const router = express.Router();

// Get api listing
router.get('/', (req, res) => {

  const data = [
    {
      name: 'Shiba Inu',
      imagePath: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      description: 'Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.'
    },
    {
      name: 'Doge',
      imagePath: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      description: 'Doge is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Doge was originally bred for hunting.'
    },
    {
      name: 'CJ',
      imagePath: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      description: 'CJ is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the CJ was originally bred for hunting.'
    },
  ];

  res.json(data);
});

module.exports = router;