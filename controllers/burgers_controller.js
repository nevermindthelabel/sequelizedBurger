const express = require('express');
const db = require('../models');

const router = express.Router();

router.get('/', (request, response) => {
  db.burgers.findAll({}).then((data) => {
    const exphbs = {
      burgers: data,
    };
    response.render('index', exphbs);
  });
});

router.post('/api/burgers', (request, response) => {
  console.log('test');
  db.burgers.create(
    {
      burger_name: request.body.burger_name,
    },
  ).then(() => {
    console.log(request.body);
    response.redirect('/');
  });
});

router.put('/api/burgers/:id', (request, response) => {
  db.burgers
    .update(
      {
        devoured: true,
      },
      {
        where: { id: request.params.id },
      },
    )
    .then(() => {
      // console.log(data);

      response.status(200).end();
    });
});
module.exports = router;
